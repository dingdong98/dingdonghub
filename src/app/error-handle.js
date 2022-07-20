const errorType = require('../constants/error-types');

const errorHandler = (error, ctx) => {
  let status, message;
  
  switch (error.message) {
    case errorType.USER_OR_PASSWORD_IS_NOT_EMPTY:
      status = 400; //Bad Rquest
      message = '用户名或者密码不能为空~';
      break;
    case errorType.USER_IS_EXISIT:
      status = 409; //confilct
      message = '用户名已经存在~';
      break;
    case errorType.USER_DOES_NOT_EXISIT:
      status = 400; //Bad Rquest
      message = '用户名不存在~';
      break;
    case errorType.PASSWORD_IS_ERROR:
      status = 400; //Bad Rquest
      message = '用户登录密码错误~';
      break;
    case errorType.NOT_AUTHORIZATION:
      status = 401; //Bad Rquest
      message = '无效token~';
      break;
    case errorType.NOT_PERMISSION:
      status = 401; //Bad Rquest
      message = '您不具备操作权限 ~';
      break;
    default:
      status = 404;
      message = 'NOT FOUND';
  }

  ctx.status = status;
  ctx.body = message;
}

module.exports = errorHandler;