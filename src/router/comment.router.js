const Router  = require('koa-router');
const { 
  verifyAuth,
  verfiyPermission 
} = require('../middleware/auth.middleware');
const { 
  create,
  reply,
  update ,
  remove,
  list
} = require('../controller/comment.controller');

const commentRouter = new Router({prefix: '/comment'});

// 发表评论
commentRouter.post('/', verifyAuth, create );
// 回复评论
commentRouter.post('/:commentId/reply', verifyAuth, reply);

// 修改评论
commentRouter.patch('/:commentId',verifyAuth, verfiyPermission, update )
// 删除评论
commentRouter.delete('/:commentId',verifyAuth, verfiyPermission, remove)

// 获取评论
commentRouter.get('/', list)

module.exports = commentRouter;

