// 导入全局环境变量的第三方库:dotenv
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// 调用dotenv.config方法加载全局环境变量
dotenv.config();
// 加载公钥私钥
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/rsa_private_key'));
const PUBLICK_KEY = fs.readFileSync(path.resolve(__dirname, './keys/rsa_public_key'));

// 导出全局环境变量对象
module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;
// 导出公钥私钥，该导出变量要在对象后
module.exports.PUBLICK_KEY = PUBLICK_KEY;
module.exports.PRIVATE_KEY = PRIVATE_KEY;