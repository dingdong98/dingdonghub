const jwt = require('jsonwebtoken');
const config = require('../app/config');
class AuthController {
  async login(ctx, next) {
    // 颁发token
    const { id, name } = ctx.user;
    const userInfo = '用户登录成功！'
    const token = jwt.sign({ id, name }, config.PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24, //一天
      algorithm: 'RS256'
    })
    ctx.body = {
      id,
      name,
      token,
      userInfo
    }
  }

  async success(ctx, next) {
    const { name } = ctx.user
    ctx.body = `用户:${name}登录授权成功,欢迎您回来`
  }
}
module.exports = new AuthController();