const app = require('./app/index')
const config = require('./app/config')

require('./app/database')


app.listen(config.APP_PORT, () => {
  console.log(`'DingdongHub'服务器在${config.APP_PORT}端口启动成功`);
})
