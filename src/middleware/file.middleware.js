const Multer = require('koa-multer');
const { AVATAR_PATH,PICTURE_PATH } = require('../constants/file-path')

const avatarUpload = Multer({
  dest: AVATAR_PATH
})
const avatarHandler = avatarUpload.single('avatar');

const pictureUpload = Multer({
  dest: PICTURE_PATH
})
const pictureHandler = pictureUpload.array('picture', 9);

module.exports = {
  avatarHandler,
  pictureHandler
}