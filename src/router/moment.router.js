const Router = require('koa-router');

const momentRouter = new Router({ prefix: '/moment' });
const {
  create,
  detail,
  list,
  update,
  remove,
  allLabels,
  fileInfo
} = require('../controller/moment.controller');
const {
  verifyAuth,
  verfiyPermission
} = require('../middleware/auth.middleware');
const {
  verfiyLableExists
} = require('../middleware/lable.middleware')

// 发布动态
momentRouter.post('/', verifyAuth, create);
// 展示动态列表
momentRouter.get('/', list)
// 展示单个动态
momentRouter.get('/:momentId', detail);
// 修改动态
momentRouter.patch('/:momentId', verifyAuth, verfiyPermission, update);
// 删除动态
momentRouter.delete('/:momentId', verifyAuth, verfiyPermission, remove);
// 给动态添加标签
momentRouter.post('/:momentId/labels', verifyAuth, verfiyPermission, verfiyLableExists, allLabels)

module.exports = momentRouter;