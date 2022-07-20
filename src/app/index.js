const Koa = require ('koa');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./error-handle');
const useRouter = require('../router/index');
const app = new Koa();

// 将请求的body数据转换为json格式
app.use(bodyParser());

// 注册路由
useRouter(app);

app.on('error',errorHandler);

module.exports = app;