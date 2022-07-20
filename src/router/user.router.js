const Router = require('koa-router'); //导入第三方库：koa-router
const {
  create,        //注册用户控制器
  avatarInfo     
} = require('../controller/user.controller');
const { 
  verifyAuth 
} = require('../middleware/auth.middleware');
   
const {
  verifyUser,     //数据导入校验
  handlePassword  //密码加密
} = require('../middleware/user.middleware')

const {
  avatarHandler
} = require('../middleware/file.middleware')

const userRouter = new Router({ prefix: '/users' });
// 创建用户路由
userRouter.post('/', verifyUser, handlePassword , create);
// 用户获取头像路由
userRouter.get('/:userId/avatar', avatarInfo)

// 导出
module.exports = userRouter;