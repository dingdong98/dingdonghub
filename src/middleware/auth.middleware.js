const jwt = require('jsonwebtoken');
const errorType = require('../constants/error-types')
const Userservice = require('../service/user.service');
const md5password = require('../utils/handle-password');
const authService = require('../service/auth.service');
const config = require('../app/config')


const verifyLogin = async (ctx, next) => {
  // 1.获取用户数据
  const { name, password } = ctx.request.body;
  // 2.判断用户名和密码是否为空
  if (!name || !password) {
    const error = new Error(errorType.USER_OR_PASSWORD_IS_NOT_EMPTY);
    return ctx.app.emit('error', error, ctx);
  }
  // 3.判断用户名是已经注册过的
  const result = await Userservice.getUserByName(name);
  const user = result[0];
  if (!user) {
    const error = new Error(errorType.USER_DOES_NOT_EXISIT);
    return ctx.app.emit('error', error, ctx);
  }
  // 4.判断用户登录密码是否和数据库中的密码相同(加密后);
  if (md5password(password) !== user.password) {
    const error = new Error(errorType.PASSWORD_IS_ERROR);
    return ctx.app.emit('error', error, ctx);
  }

  // 校验成功后将用户数据返回
  ctx.user = user;
  await next();
}

// 校验用户是否登录成功
const verifyAuth = async (ctx, next) => {
  console.log('用户登录token授权成功,欢迎您回来~')
  // 1.获取token
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    const error = new Error(errorType.NOT_AUTHORIZATION);
    return ctx.app.emit('error', error, ctx);
  }
  const token = authorization.replace('Bearer ', "");

  // 2.验证token
  try {
    const result = jwt.verify(token, config.PRIVATE_KEY, {
      algorithms: ["RS256"]
    });
    // 返回用户token令牌 result包含（id，name，iat，exp）
    ctx.user = result;
    await next();  //调用下一个中间件
  } catch (err) {
    const error = new Error(errorType.NOT_AUTHORIZATION);
    ctx.app.emit('error', error, ctx)
    console.log(errorType.NOT_AUTHORIZATION)
  }
}

const verfiyPermission = async (ctx, next) => {
  console.log("验证是否有权限middleware~");
  // 1.获取参数
  const [resourceKey] = Object.keys(ctx.params);
  const tableName = resourceKey.replace('Id', '');
  const resourceId = ctx.params[resourceKey];
  const { id } = ctx.user;

  // 2.查询是否具备权限
  try {
    const isPermission = await authService.checkPermission(tableName, resourceId, id);
    if (!isPermission) throw new Error();
  } catch (err) {
    const error = new Error(errorType.NOT_PERMISSION);
    return ctx.app.emit('error', error, ctx);
  }

  await next();
}
// 注意：module.exports导出的是一个对象？而verifyLogin是一个常量？
module.exports = {
  verifyLogin,
  verifyAuth,
  verfiyPermission
}
