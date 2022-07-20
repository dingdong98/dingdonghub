const Router = require('koa-router');
const AuthRouter = new Router();
const  {
  login,
  success
} = require('../controller/auth.controller');

const {
  verifyLogin,
  verifyAuth
} = require('../middleware/auth.middleware')

// 用户登录接口
AuthRouter.post('/login', verifyLogin , login);
// 测试用户登录接口
AuthRouter.get('/test', verifyAuth, success);

module.exports = AuthRouter;
