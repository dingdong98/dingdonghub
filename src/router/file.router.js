const Router = require('koa-router');

const {
  avatarHandler,
  pictureHandler
} = require('../middleware/file.middleware')
const {
  verifyAuth,
} = require('../middleware/auth.middleware');
const {
  saveAvatarInfo,
  savePictureInfo
} = require('../controller/file.comtroller')

const fileRouter = new Router({ prefix: '/upload' });

// 上传用户头像接口
fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatarInfo);
// 上传动态配图接口
fileRouter.post('/picture', verifyAuth, pictureHandler, savePictureInfo);


module.exports = fileRouter;