A dingdonghub development using node koa （基于koa搭建dingdonghub后台接口）

## 零、项目运行说明
将项目`下载`或者`clone`到本地，使用`VScode`打开项目文件夹

1. 打开node终端
   1. 选中项目文件夹右键或者使用快捷键`Alt + ~`打开终端
2. 运行`npm install`初始化项目依赖

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658283269591-805c0cbc-de1a-4c27-9e78-13132b2c3863.png#clientId=u63cfa375-a4df-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=582&id=u0fc6c013&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1164&originWidth=1713&originalType=binary&ratio=1&rotation=0&showTitle=false&size=169675&status=done&style=none&taskId=uf66c2bea-8d20-4317-850a-d89f956be0d&title=&width=856.5)

3. 配置`.env文件`
   1. 该文件为服务器全局变量，示例配置如下：

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658283690133-97db348a-e35a-4059-a82f-5cd71d63e394.png#clientId=u63cfa375-a4df-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=318&id=u13498be0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=636&originWidth=1533&originalType=binary&ratio=1&rotation=0&showTitle=false&size=118076&status=done&style=none&taskId=u1253074d-19c8-435b-80b6-b7d7f312d5e&title=&width=766.5)

4. 启动项目`node ./src/main.j`

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658283751050-521d09c4-ecab-45b3-8f33-4c8f7206f58e.png#clientId=u63cfa375-a4df-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=83&id=ue46a0833&margin=%5Bobject%20Object%5D&name=image.png&originHeight=165&originWidth=944&originalType=binary&ratio=1&rotation=0&showTitle=false&size=42155&status=done&style=none&taskId=u01cc495b-05df-4bb8-b4f0-49b37ad5473&title=&width=472)
## 一、接口功能说明
dingdonghub旨在创建一个程序员分享生活动态的平台
完整的项目接口包括：

1. 面向用户的业务接口
1. 面向企业内部的后台管理接口

完整的功能如下：

- 用户管理系统
- 内容管理系统
- 内容评论管理
- 内容标签管理
- 文件管理系统

Postman中的接口列表：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658141144764-635ee58b-1b3b-453a-9716-4044a492d376.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=207&id=ud33c5f6c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=413&originWidth=599&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28860&status=done&style=none&taskId=ua96753bb-9c1a-4755-b3ff-3a293d23d06&title=&width=299.5)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658215936967-ace97d64-c95f-489e-a1ba-c260a61d1b6f.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=607&id=u03a7f04d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1214&originWidth=654&originalType=binary&ratio=1&rotation=0&showTitle=false&size=132179&status=done&style=none&taskId=uda6d5ed0-b158-4c92-8a59-a39485524b7&title=&width=327)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658215948954-ed5d5e68-9d58-4c1c-bf79-5a205226e7d1.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=77&id=u19f1edb4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=154&originWidth=671&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17117&status=done&style=none&taskId=uf22101bf-8b40-4abe-8985-c351dd732cf&title=&width=335.5)

## 二、项目环境搭建
### 1.目录结构
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658141920734-b75d2964-9fd2-4e89-b7b4-371e9ac4cea4.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=324&id=u06737562&margin=%5Bobject%20Object%5D&name=image.png&originHeight=648&originWidth=1901&originalType=binary&ratio=1&rotation=0&showTitle=false&size=147699&status=done&style=none&taskId=ub20859df-8dab-43c3-bd7a-82da7f6b3ff&title=&width=950.5)
### 2.应用配置信息写到[环境变量](https://so.csdn.net/so/search?q=%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F&spm=1001.2101.3001.7020)

1. 编写.env文件
1. 通过第三方库：dotenv加载配置变量

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658142414108-4a6b8731-869d-4fb1-89ed-db4d9d7163fd.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=478&id=u9ff67117&margin=%5Bobject%20Object%5D&name=image.png&originHeight=956&originWidth=1720&originalType=binary&ratio=1&rotation=0&showTitle=false&size=252017&status=done&style=none&taskId=u0931c41d-ab0f-4aee-8835-227b0041802&title=&width=860)
### 3.创建和启动服务器

1. 导入并注册koa服务器
1. 开启监听服务器端口

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658143475860-45de48ba-f36b-49a4-ba6d-833bdb419677.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=348&id=u6ec87feb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=650&originWidth=1725&originalType=binary&ratio=1&rotation=0&showTitle=false&size=174477&status=done&style=none&taskId=u19dc63c3-a910-4f00-ae6b-2a76e22c01f&title=&width=924.5)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658143260231-ad5138fb-cf7a-49e9-9014-07ad5102b8a4.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=805&id=u10a35998&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1610&originWidth=2024&originalType=binary&ratio=1&rotation=0&showTitle=false&size=547238&status=done&style=none&taskId=u3a7f6c8d-6f3c-4968-bf5f-7de057264f3&title=&width=1012)
## 三、项目接口
### 0.封装路由注册组件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658143871262-28008167-eb6a-4045-bb89-cdc7d59a57a8.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=399&id=NjcHe&margin=%5Bobject%20Object%5D&name=image.png&originHeight=798&originWidth=1869&originalType=binary&ratio=1&rotation=0&showTitle=false&size=178212&status=done&style=none&taskId=u0f7dce7e-abdf-43ec-ab13-bde389c6b08&title=&width=934.5)
### 0.连接Mysql数据库
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658193272691-1425143e-2d8f-4407-8b94-018097389478.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=694&id=u9e8855d1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1524&originWidth=1471&originalType=binary&ratio=1&rotation=0&showTitle=false&size=683649&status=done&style=none&taskId=ufe0032b9-55fc-4c59-961b-778c6944021&title=&width=669.5)
### 1.用户注册接口
用户注册接口编写流程：

1. 注册用户路由router编写
1. 处理函数的控制器controller编写
- 判断用户名和密码是否为空
- 判断用户名是否已经存在
- 对密码进行加密操作
3. 操作数据库的service编写
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658156683672-1ac416b5-a4e8-4cb0-93f0-192f5c0bd197.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=461&id=uc5b93d97&margin=%5Bobject%20Object%5D&name=image.png&originHeight=922&originWidth=1584&originalType=binary&ratio=1&rotation=0&showTitle=false&size=322777&status=done&style=none&taskId=u7d126531-45b4-406e-a98d-9d85c9e9dd2&title=&width=792)
#### 中间件

1. 


![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658156954886-3c88a891-a36d-4ab9-abf2-2143e512bd03.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=483&id=u20de1a29&margin=%5Bobject%20Object%5D&name=image.png&originHeight=965&originWidth=1225&originalType=binary&ratio=1&rotation=0&showTitle=false&size=211039&status=done&style=none&taskId=uabf7e608-3b92-4c1f-a49f-287851d41ed&title=&width=612.5)

2. 


![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658157266753-b0558bf5-a49f-4753-90db-d3c9544e1821.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=379&id=u13ce08a6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=758&originWidth=1799&originalType=binary&ratio=1&rotation=0&showTitle=false&size=202273&status=done&style=none&taskId=u8ee6e010-04f5-4e20-9f7f-b01a8f0b629&title=&width=899.5)
#### 控制器 
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658157464479-4b549abc-df44-4d67-9f33-13007913f5fe.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=288&id=u6d216589&margin=%5Bobject%20Object%5D&name=image.png&originHeight=514&originWidth=972&originalType=binary&ratio=1&rotation=0&showTitle=false&size=99159&status=done&style=none&taskId=u99f5da48-c218-4da1-bae1-14ceb2c7f5f&title=&width=545)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658157687160-a8d9292e-b288-4379-a7d2-e720912f8d52.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=259&id=ue3d628a5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=518&originWidth=1280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=86056&status=done&style=none&taskId=u904d0eb4-521d-42bc-9f01-18b07a34b0c&title=&width=640)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658157894549-a3744ab3-739e-42b5-bcce-0188afebc7bf.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=542&id=udcc4d209&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1221&originWidth=1679&originalType=binary&ratio=1&rotation=0&showTitle=false&size=261419&status=done&style=none&taskId=u6e4818f2-f7a1-466a-8b29-b12c5ab9f0f&title=&width=745.5)
### 2.用户登录接口
用户登录接口编写流程：

1. 用户登录路由router编写
1. 处理函数的控制器controller编写
- 判断用户名和密码是否为空
- 判断用户名是否已经存在
- 对密码进行加密操作
3. 操作数据库的service编写
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658193966033-376f57cb-996f-4a26-9a9e-3d964ddc3c67.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=347&id=ue61081a8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=693&originWidth=828&originalType=binary&ratio=1&rotation=0&showTitle=false&size=87404&status=done&style=none&taskId=u612fe78f-f3ca-43a8-a241-5cd4a19de1c&title=&width=414)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658194134063-986f1026-b6e5-4142-9453-5cdafbf5967a.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=385&id=u577e4f46&margin=%5Bobject%20Object%5D&name=image.png&originHeight=770&originWidth=1187&originalType=binary&ratio=1&rotation=0&showTitle=false&size=174340&status=done&style=none&taskId=u41331308-c61b-424a-9fc1-38f426f42c4&title=&width=593.5)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658194304021-adfb60ec-ecc7-4332-a65b-79e7dde8cf0f.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=541&id=u85dbbab5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1176&originWidth=2134&originalType=binary&ratio=1&rotation=0&showTitle=false&size=453065&status=done&style=none&taskId=u33be8680-3728-47b1-b724-ffaeed2c624&title=&width=982)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216741485-c7cf28b7-88d5-4142-9756-b4dc60ea255a.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=597&id=u24d50f99&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1193&originWidth=1468&originalType=binary&ratio=1&rotation=0&showTitle=false&size=123053&status=done&style=none&taskId=u8f70ae55-0599-4ed9-b041-ac468b78364&title=&width=734)
### 3.测试用户登录接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658194429676-6faeda27-3f0b-4198-b409-227d3bc17d62.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=44&id=u60c61150&margin=%5Bobject%20Object%5D&name=image.png&originHeight=87&originWidth=716&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17706&status=done&style=none&taskId=u43994cf5-6174-43c7-86e2-832d77f8284&title=&width=358)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658194607540-a20385b8-49f5-4b0d-9f3c-5981e2215524.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=458&id=ua47f89b5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=915&originWidth=1024&originalType=binary&ratio=1&rotation=0&showTitle=false&size=166769&status=done&style=none&taskId=ub173a49a-27e4-4da7-976e-0c0c8532de5&title=&width=512)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658194713362-9ed19980-a1df-4880-bd9f-2e292b625bfd.png#clientId=u7fa5e928-9056-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=76&id=ud7484106&margin=%5Bobject%20Object%5D&name=image.png&originHeight=152&originWidth=783&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29444&status=done&style=none&taskId=udc040f5c-adb2-4c4a-9af3-007c99d083d&title=&width=391.5)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216810516-cec1f216-1b70-4ceb-a275-5d06d3e071fc.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=452&id=uc0f223ac&margin=%5Bobject%20Object%5D&name=image.png&originHeight=903&originWidth=1457&originalType=binary&ratio=1&rotation=0&showTitle=false&size=133217&status=done&style=none&taskId=u84204832-6876-4ef0-bda8-1637d94af9e&title=&width=728.5)
### 4.用户发布动态接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658197404675-57041acf-864c-49b1-b9f3-96e56cb9a50e.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=410&id=u1869db8b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=819&originWidth=1065&originalType=binary&ratio=1&rotation=0&showTitle=false&size=96003&status=done&style=none&taskId=u20ee98d6-54c3-4150-905a-8d0d381c5d9&title=&width=532.5)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658197437784-af348c87-9aef-44c7-9ea3-3791a3bf59e3.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=480&id=uea7ee9c9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=960&originWidth=1006&originalType=binary&ratio=1&rotation=0&showTitle=false&size=171554&status=done&style=none&taskId=ue1b3efd6-181e-439a-8eac-417c2bb17b6&title=&width=503)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658197487968-e50406c6-cc18-43d0-8a23-d741b7a51931.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=233&id=u7e384495&margin=%5Bobject%20Object%5D&name=image.png&originHeight=465&originWidth=1074&originalType=binary&ratio=1&rotation=0&showTitle=false&size=79001&status=done&style=none&taskId=u9c5fc00a-5b3c-475e-a41e-8f1d1d52995&title=&width=537)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658197516608-a62fcd8f-97f8-4fa4-b143-e084fa8c4dd6.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=218&id=u9978d380&margin=%5Bobject%20Object%5D&name=image.png&originHeight=435&originWidth=1298&originalType=binary&ratio=1&rotation=0&showTitle=false&size=85886&status=done&style=none&taskId=u88bbac43-64b1-4fae-89a7-b7c8921e8bf&title=&width=649)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216976274-a5bddf86-818e-4821-8f12-0f5db4e9013c.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=636&id=u5a3994ae&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1272&originWidth=1381&originalType=binary&ratio=1&rotation=0&showTitle=false&size=127732&status=done&style=none&taskId=u6483194c-c5ef-4a33-8807-4eed13144a6&title=&width=690.5)
### 5.展示动态（单个）接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658197759901-080f0cd2-9039-463a-afc8-140e357c07a7.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=39&id=ucb17d416&margin=%5Bobject%20Object%5D&name=image.png&originHeight=77&originWidth=622&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14608&status=done&style=none&taskId=uf03db945-4ccc-4779-8ede-17217002138&title=&width=311)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658197799103-3606a038-fbfe-4f06-b35c-9a284c3004b4.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=146&id=ufcc6e380&margin=%5Bobject%20Object%5D&name=image.png&originHeight=292&originWidth=995&originalType=binary&ratio=1&rotation=0&showTitle=false&size=54288&status=done&style=none&taskId=u7c0d3e76-58c9-4140-8be3-7d1f4380ce5&title=&width=497.5)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658197851771-f403cc9b-9088-4346-acfa-941cfcf5a7ce.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=223&id=u8423ce19&margin=%5Bobject%20Object%5D&name=image.png&originHeight=445&originWidth=1296&originalType=binary&ratio=1&rotation=0&showTitle=false&size=59254&status=done&style=none&taskId=ue434038c-1600-4448-947a-36b8047693e&title=&width=648)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217072532-ba38cfce-4e5a-48c4-a0fc-ab1d038916cb.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=619&id=udb43b580&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1238&originWidth=1124&originalType=binary&ratio=1&rotation=0&showTitle=false&size=100842&status=done&style=none&taskId=u68f77491-c511-4591-b38e-b6ae287914d&title=&width=562)
### 6.获取动态列表接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658197904304-25a4e5a3-3d59-4b91-8fbe-d87c539f649c.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=35&id=u777b913b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=70&originWidth=466&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12067&status=done&style=none&taskId=ufe094ef1-235e-48c4-978b-6443a26b3b4&title=&width=233)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658197974562-19387449-6e0a-4ca5-9dc9-cad5fa75e94d.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=190&id=ub314491a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=380&originWidth=1050&originalType=binary&ratio=1&rotation=0&showTitle=false&size=54933&status=done&style=none&taskId=ufcce57b1-4889-4939-8a7c-84594c6660d&title=&width=525)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198002560-7e32b95d-c004-4276-a465-c6523b651bcf.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=327&id=u7ba90316&margin=%5Bobject%20Object%5D&name=image.png&originHeight=653&originWidth=1335&originalType=binary&ratio=1&rotation=0&showTitle=false&size=87425&status=done&style=none&taskId=u5bfa86c4-e20f-4bfb-90b8-6a40774b41e&title=&width=667.5)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217123368-4fa4f825-e78d-4258-9975-f1028a993a38.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=650&id=u4eda4daf&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1300&originWidth=2014&originalType=binary&ratio=1&rotation=0&showTitle=false&size=169709&status=done&style=none&taskId=uee0379ed-80fa-47f6-845f-3e03a93f097&title=&width=1007)
### 7.修改动态内容接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198059335-aeff9f64-835c-4b5d-b73f-b9f84c2fb9f2.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=37&id=ubf2420b2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=73&originWidth=1105&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20287&status=done&style=none&taskId=uc7ed1659-4a21-472c-8c08-24bef467368&title=&width=552.5)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198069917-0b796e48-a905-4493-a3db-9eddda335f0c.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=481&id=u7b857ad4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=961&originWidth=974&originalType=binary&ratio=1&rotation=0&showTitle=false&size=171408&status=done&style=none&taskId=ua3c57971-661d-402d-bd42-776247393e0&title=&width=487)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198416667-f23871de-4279-4961-a1a8-ab8f144a8a62.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=359&id=XxLK2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=718&originWidth=1385&originalType=binary&ratio=1&rotation=0&showTitle=false&size=181505&status=done&style=none&taskId=ub3005925-2646-4638-a70b-06e5ee3cf67&title=&width=692.5)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198169091-5fbce794-1fe8-42e5-8715-467cbc6a48e8.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=195&id=ubebfca4b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=1069&originalType=binary&ratio=1&rotation=0&showTitle=false&size=60763&status=done&style=none&taskId=u5773e9b8-1a12-4a65-a94f-2924d3228da&title=&width=534.5)

#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198241285-6d829db8-c502-4d9e-83f8-7571e752e9c1.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=282&id=u5485e51f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=563&originWidth=1345&originalType=binary&ratio=1&rotation=0&showTitle=false&size=104743&status=done&style=none&taskId=u787d6eb7-adc0-43d8-9d62-afec3374449&title=&width=672.5)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198670403-d8fbda20-825a-458a-b138-66e7c35f38d1.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=114&id=u8525b350&margin=%5Bobject%20Object%5D&name=image.png&originHeight=207&originWidth=1217&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39826&status=done&style=none&taskId=ub63b9cf5-e925-44ae-b369-952f307380d&title=&width=671.5)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217173984-b8ba048a-c699-4204-acce-c4a93c6a2a00.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=603&id=u39aa70dc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1205&originWidth=1990&originalType=binary&ratio=1&rotation=0&showTitle=false&size=142351&status=done&style=none&taskId=u93e7e8b2-f388-4116-bd98-e7921866d37&title=&width=995)
### 8.删除动态内容接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198561340-6254b623-f76f-4f41-930b-5a38adb8354c.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=43&id=u7578bb9c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=85&originWidth=1115&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20804&status=done&style=none&taskId=u5646ff51-fc49-49f8-ad3d-cc4ccd02183&title=&width=557.5)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198069917-0b796e48-a905-4493-a3db-9eddda335f0c.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=481&id=woFnY&margin=%5Bobject%20Object%5D&name=image.png&originHeight=961&originWidth=974&originalType=binary&ratio=1&rotation=0&showTitle=false&size=171408&status=done&style=none&taskId=ua3c57971-661d-402d-bd42-776247393e0&title=&width=487)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198416667-f23871de-4279-4961-a1a8-ab8f144a8a62.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=359&id=lUZhw&margin=%5Bobject%20Object%5D&name=image.png&originHeight=718&originWidth=1385&originalType=binary&ratio=1&rotation=0&showTitle=false&size=181505&status=done&style=none&taskId=ub3005925-2646-4638-a70b-06e5ee3cf67&title=&width=692.5)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198724481-f7a79e3e-f24a-4a37-8380-0902ba60caa7.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=156&id=uaae5aac4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=311&originWidth=900&originalType=binary&ratio=1&rotation=0&showTitle=false&size=43794&status=done&style=none&taskId=u24c9a079-ee54-4bb6-ad5a-9fc4a827e1e&title=&width=450)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658198738490-16bfb23d-fa5a-4292-8a04-5ff9360033e7.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=98&id=ufe23840c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=196&originWidth=1082&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34464&status=done&style=none&taskId=u9bfa434d-03f1-4e19-82be-18ccc4e9871&title=&width=541)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217202864-58292c7f-6f7f-4600-9588-6b5774720da0.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=603&id=u0c665a95&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1205&originWidth=1990&originalType=binary&ratio=1&rotation=0&showTitle=false&size=142351&status=done&style=none&taskId=u9c0324c4-db77-4fc8-905c-bc03d624b6e&title=&width=995)
### 9.发表评论内容接口
#### 创建mysql表
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199120879-3ec36851-c892-4b0d-a410-3b06fdb0085d.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=466&id=gRi8v&margin=%5Bobject%20Object%5D&name=image.png&originHeight=931&originWidth=1417&originalType=binary&ratio=1&rotation=0&showTitle=false&size=832721&status=done&style=none&taskId=u9bc5d2c7-beb7-4776-841b-f3e148537b2&title=&width=708.5)
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199177349-52c8fc73-e964-4939-9c92-1e367f0095cc.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=38&id=uedb46e5c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=75&originWidth=730&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14461&status=done&style=none&taskId=u1e6d9bfb-d46b-4b29-8936-ef27c6413e2&title=&width=365)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199222554-1d6fa6f0-1bcf-49f1-b00c-30d149a3c2bc.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=478&id=u439e6ccc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=956&originWidth=1002&originalType=binary&ratio=1&rotation=0&showTitle=false&size=171926&status=done&style=none&taskId=ucc47c745-e6f0-40d5-85ae-866e1245b18&title=&width=501)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199263123-c78facd2-d587-4067-be34-6a5f878e267d.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=195&id=u5c63fd3f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=1059&originalType=binary&ratio=1&rotation=0&showTitle=false&size=66162&status=done&style=none&taskId=ua69a58e3-b80e-42aa-bc74-fbb17341cfb&title=&width=529.5)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199283951-842ed230-3e41-47aa-a8e9-5731948b88f2.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=122&id=u69028769&margin=%5Bobject%20Object%5D&name=image.png&originHeight=244&originWidth=1227&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47266&status=done&style=none&taskId=u67a40541-7a39-4a67-bf9c-463c58ba190&title=&width=613.5)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217262518-c198e9dc-72e7-4753-91cd-f3a48e0fec4f.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=597&id=uad32c621&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1194&originWidth=2002&originalType=binary&ratio=1&rotation=0&showTitle=false&size=138660&status=done&style=none&taskId=u928d8971-9cc7-48f4-828f-2198b4fc771&title=&width=1001)
### 10.回复评论内容接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199358470-8da394b9-b4c5-4895-99e3-acf222461104.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=37&id=ud19bfba1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=74&originWidth=936&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17851&status=done&style=none&taskId=u59dfd837-63c6-44d7-a26f-95077591b65&title=&width=468)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199403943-5ee10389-b28f-4e69-8779-5184f30149d5.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=477&id=u341f9aaf&margin=%5Bobject%20Object%5D&name=image.png&originHeight=954&originWidth=986&originalType=binary&ratio=1&rotation=0&showTitle=false&size=171915&status=done&style=none&taskId=u6627a620-5eb4-4626-83a8-22b52386fcf&title=&width=493)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199447455-58a464ad-ff35-418b-a489-df6793306724.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=137&id=u7f47d4ad&margin=%5Bobject%20Object%5D&name=image.png&originHeight=273&originWidth=1185&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48793&status=done&style=none&taskId=ub44c974b-dda0-439e-b7f7-ebfca461162&title=&width=592.5)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199464308-0959e201-b2e1-4f49-82a0-f5dd954bdcf9.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=100&id=uc83ac54f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=200&originWidth=1666&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51267&status=done&style=none&taskId=uc4c0b70f-99e3-4ac2-8da3-a2927aae62e&title=&width=833)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217293137-6dad61c0-4980-4f3c-9b8b-631762364122.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=593&id=u197a1b25&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1185&originWidth=1358&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109076&status=done&style=none&taskId=ue931af0e-acc8-4d20-ad0f-c34771eb9dc&title=&width=679)
### 11.修改评论接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199503452-1041a0fb-e947-4538-a07e-2be651de9060.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=44&id=u1e7db264&margin=%5Bobject%20Object%5D&name=image.png&originHeight=88&originWidth=1132&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21414&status=done&style=none&taskId=u13841987-3902-4f63-9ab5-f37dca8849c&title=&width=566)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199546529-289939d9-7065-4163-943b-02ea079b2f55.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=476&id=u512621b1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=952&originWidth=958&originalType=binary&ratio=1&rotation=0&showTitle=false&size=171381&status=done&style=none&taskId=ubd4e7080-fb47-4636-85ef-b5419f0bc1e&title=&width=479)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199563167-ebbee6e7-b49a-4e51-9e0e-549c8dafc623.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=363&id=u0f22a90c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=726&originWidth=1360&originalType=binary&ratio=1&rotation=0&showTitle=false&size=133082&status=done&style=none&taskId=u83843c40-70b3-47df-a8fd-adc4f7a3d9c&title=&width=680)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199578833-6cc5f50d-bcca-4b3e-80ba-fa647bb47214.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=143&id=ufe2deef1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=285&originWidth=993&originalType=binary&ratio=1&rotation=0&showTitle=false&size=41123&status=done&style=none&taskId=uc3049730-0ac8-4f5d-aaa0-78815f3555a&title=&width=496.5)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199585451-202827de-f000-402b-b046-4f1361e36151.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=109&id=uc520e598&margin=%5Bobject%20Object%5D&name=image.png&originHeight=217&originWidth=1214&originalType=binary&ratio=1&rotation=0&showTitle=false&size=41244&status=done&style=none&taskId=uab089e1c-7e3c-4234-b5ea-0dbca9a9cea&title=&width=607)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217362485-29d6fbd7-8292-465e-8f18-281c204e0b21.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=607&id=u8d7b280a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1213&originWidth=1490&originalType=binary&ratio=1&rotation=0&showTitle=false&size=123921&status=done&style=none&taskId=u7282af9e-049b-4860-9a4f-69b5d75029c&title=&width=745)
### 12.删除评论接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199693111-064f85ac-9159-4d9e-9632-39dfce7ffee0.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=40&id=u9ed48bfa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=79&originWidth=1123&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20755&status=done&style=none&taskId=u16f51ee4-fed4-497f-b7c6-f2a770355ae&title=&width=561.5)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199705326-e3851754-1e0f-4175-818a-05d3399d8ef2.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=474&id=u0983adbe&margin=%5Bobject%20Object%5D&name=image.png&originHeight=947&originWidth=951&originalType=binary&ratio=1&rotation=0&showTitle=false&size=171214&status=done&style=none&taskId=u39ba83ce-d11f-461d-80f8-93bdf7832f8&title=&width=475.5)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199716822-e6e67b87-40fe-47ac-9a5c-c8c914c05ea1.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=360&id=ucb332fee&margin=%5Bobject%20Object%5D&name=image.png&originHeight=720&originWidth=1388&originalType=binary&ratio=1&rotation=0&showTitle=false&size=133307&status=done&style=none&taskId=u5cb1f7f5-cc96-4857-a140-337ed932efd&title=&width=694)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199727711-e4d7d88e-fe82-42fe-af83-084523b570ff.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=111&id=u383a6170&margin=%5Bobject%20Object%5D&name=image.png&originHeight=221&originWidth=841&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30780&status=done&style=none&taskId=u2502c2b8-194f-4280-8d77-e6982853346&title=&width=420.5)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199736064-2898c6bb-78c6-4c3a-ac0c-f02d15040700.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=98&id=u5a646b58&margin=%5Bobject%20Object%5D&name=image.png&originHeight=195&originWidth=1095&originalType=binary&ratio=1&rotation=0&showTitle=false&size=35473&status=done&style=none&taskId=u0ddf6052-1203-4b33-b4dd-6f9e3a76fc6&title=&width=547.5)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217398240-437e3810-1d88-42d0-92df-28fb44bc8f8a.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=570&id=u782bd29a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1140&originWidth=1391&originalType=binary&ratio=1&rotation=0&showTitle=false&size=132872&status=done&style=none&taskId=u86920ef8-ec02-4d95-bc45-0b2be134d01&title=&width=695.5)
### 13.获取评论列表接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199826840-0613d5b1-8f42-4e4c-8a58-fba3f8e0acb5.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=48&id=u7105dfab&margin=%5Bobject%20Object%5D&name=image.png&originHeight=95&originWidth=463&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11255&status=done&style=none&taskId=udadfd58a-dced-4ed6-8d28-74525746288&title=&width=231.5)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199853524-9b37b313-6f71-477b-806f-85a8ad3acf3c.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=115&id=u011260ad&margin=%5Bobject%20Object%5D&name=image.png&originHeight=230&originWidth=981&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38818&status=done&style=none&taskId=u6da6a6b0-612a-49ec-bade-f00f246c916&title=&width=490.5)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199870379-7a277e72-113f-44e4-94df-c589a2309018.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=102&id=uf2edb50e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=204&originWidth=1061&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39583&status=done&style=none&taskId=uc0de813c-0d8d-4ed6-80ff-f1b9253d199&title=&width=530.5)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217465687-b6169241-8391-4881-a445-9a21301cdf42.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=639&id=udaa8b28a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1277&originWidth=2053&originalType=binary&ratio=1&rotation=0&showTitle=false&size=152637&status=done&style=none&taskId=ue9f39e84-dba5-41ba-afc6-6fc5f4b881d&title=&width=1026.5)
### 14.创建标签接口
#### 创建mysql表
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658199937467-3f486d0b-6e90-4dda-9b4d-cda1ac82ef15.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=113&id=uf24a6451&margin=%5Bobject%20Object%5D&name=image.png&originHeight=225&originWidth=1103&originalType=binary&ratio=1&rotation=0&showTitle=false&size=184056&status=done&style=none&taskId=u8702fe18-c08e-4407-895b-0218dd1af1a&title=&width=551.5)
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658200014050-c192b50b-4e41-48d5-99b3-d0a44ae47335.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=45&id=u57995b81&margin=%5Bobject%20Object%5D&name=image.png&originHeight=90&originWidth=685&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14501&status=done&style=none&taskId=u840fe787-4549-4b9c-a5ab-d036c551eb6&title=&width=342.5)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658200046031-db569af7-b2e1-46df-b3ab-5ea66f56e119.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=474&id=u3f8e38b6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=947&originWidth=935&originalType=binary&ratio=1&rotation=0&showTitle=false&size=170628&status=done&style=none&taskId=ue2f6231b-3c78-471d-aad6-ac47c768647&title=&width=467.5)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658200167336-1cd324bd-4a01-4c67-9b48-054ca053c3a4.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=107&id=u6b798368&margin=%5Bobject%20Object%5D&name=image.png&originHeight=214&originWidth=786&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29380&status=done&style=none&taskId=u2de6f6a2-b6fa-4f70-9dc1-cdfd537ddfa&title=&width=393)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658200190961-f658a730-19f2-4866-8ec5-c34b9a5832f3.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=134&id=u4f856adf&margin=%5Bobject%20Object%5D&name=image.png&originHeight=267&originWidth=1067&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39951&status=done&style=none&taskId=ub9a7977b-9dcf-418a-8e27-d33a326a6b0&title=&width=533.5)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217501918-4090e338-2482-4d87-a37d-86d9974b4ae0.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=582&id=u03dc8c86&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1163&originWidth=1034&originalType=binary&ratio=1&rotation=0&showTitle=false&size=90006&status=done&style=none&taskId=ucfda2380-4266-41d4-81ec-ee80aa32b95&title=&width=517)
### 15.展示标签列表接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658201039594-63936268-1218-4b66-ba46-d2cc1f9a9000.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=41&id=ue393b041&margin=%5Bobject%20Object%5D&name=image.png&originHeight=82&originWidth=454&originalType=binary&ratio=1&rotation=0&showTitle=false&size=13779&status=done&style=none&taskId=ua9ec6351-6733-4a04-b2b6-cb4bdb45020&title=&width=227)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658202649596-cfea30b1-4561-49d3-841a-42ec5368053a.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=116&id=u490bb7f6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=232&originWidth=902&originalType=binary&ratio=1&rotation=0&showTitle=false&size=35475&status=done&style=none&taskId=u513c0cee-bfc9-4f88-a472-4bb132b5689&title=&width=451)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658202909327-c7e43047-ad2e-4454-b00e-dad61e536722.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=105&id=u5442fd50&margin=%5Bobject%20Object%5D&name=image.png&originHeight=210&originWidth=1135&originalType=binary&ratio=1&rotation=0&showTitle=false&size=36043&status=done&style=none&taskId=ua1fb21a4-2a91-467d-aac3-7a8926e8c86&title=&width=567.5)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217532926-9bae29c4-61cb-437b-a6d6-b64ee5733842.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=647&id=u9cf26f5b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1294&originWidth=2018&originalType=binary&ratio=1&rotation=0&showTitle=false&size=150927&status=done&style=none&taskId=u93653573-ed08-4e34-9642-28491401e52&title=&width=1009)
### 16.给动态添加标签接口
#### 创建mysql表
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658203000510-d0d62f4b-fbd3-4513-901f-2ea19c9ebd26.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=158&id=u6e364923&margin=%5Bobject%20Object%5D&name=image.png&originHeight=315&originWidth=1254&originalType=binary&ratio=1&rotation=0&showTitle=false&size=313205&status=done&style=none&taskId=u669ccd0c-2998-41ed-bf99-792baf7d648&title=&width=627)
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658203045041-4009c4c4-c258-4e3a-b4d2-0ebd610d4d5e.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=45&id=uea1c5bf3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=90&originWidth=1557&originalType=binary&ratio=1&rotation=0&showTitle=false&size=27054&status=done&style=none&taskId=u34ebb88b-33f2-43d4-b21b-7315b9459c7&title=&width=778.5)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658203060514-0073a46b-6e90-45e6-8f64-0e56638a666e.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=476&id=ub0b0084c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=951&originWidth=887&originalType=binary&ratio=1&rotation=0&showTitle=false&size=170223&status=done&style=none&taskId=u4cf079b1-5988-4407-b9bd-d59b175c09a&title=&width=443.5)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658203105088-d57d69e0-0924-4d7e-8443-7ef81f56471d.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=363&id=ufdb552c6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=726&originWidth=1337&originalType=binary&ratio=1&rotation=0&showTitle=false&size=132759&status=done&style=none&taskId=uab0ccf3a-bf5c-449a-8f39-fdff7498302&title=&width=668.5)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658203206305-91320877-1397-4626-942d-231f3a0bda8c.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=559&id=u313765ea&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1117&originWidth=1134&originalType=binary&ratio=1&rotation=0&showTitle=false&size=157981&status=done&style=none&taskId=ufd47aa9e-7394-45e3-81fc-e193da5b227&title=&width=567)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658203270763-08a7f655-23a3-4a98-bb66-965884fdeba6.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=317&id=u7d9ab601&margin=%5Bobject%20Object%5D&name=image.png&originHeight=634&originWidth=1100&originalType=binary&ratio=1&rotation=0&showTitle=false&size=97915&status=done&style=none&taskId=u8c0996a0-4e49-411a-80c0-73a6405bf6d&title=&width=550)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658203296083-09ac55cc-17a1-4f90-ac7d-631aeb16ae4a.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=104&id=u693f2dd0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=207&originWidth=1412&originalType=binary&ratio=1&rotation=0&showTitle=false&size=48184&status=done&style=none&taskId=uae4fffdc-b093-4b2e-af93-2f6c864e054&title=&width=706)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217637487-fdd07922-1f56-45bb-92b5-6630662c1127.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=520&id=u69ad99ef&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1040&originWidth=1650&originalType=binary&ratio=1&rotation=0&showTitle=false&size=117892&status=done&style=none&taskId=ucf492161-d04c-45a6-a7cd-6534d6db0d0&title=&width=825)
### 17.上传用户头像图片接口
实现逻辑：

1. 图片（文件）上传 /upload/avatar

`目的：服务器端可以保存一张图片`

2. 提供一个接口，可以让用户获取图片

`/1/avatar -> 找到图片\读取图片\content-type: image/jpeg\返回图像的信息`

3. 将URL存储到用户信息中

`avatarURL: 头像的地址`

4. 获取信息时，获取用户的头像

---

#### 创建mysql表
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658205347185-2d5aeb6b-e5f4-46ac-bc8f-506e4e8300f3.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=187&id=ue659347a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=373&originWidth=1212&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38650&status=done&style=none&taskId=u7efa2d36-1e5e-45b5-80ad-8dd0b2f4234&title=&width=606)

1. 定义上传图像的接口，将用户上传的图片保存到服务器本地的uploads/avatar文件夹下，然后再把图片的信息保存到数据库中的avatar表中：
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216051776-ecd772aa-cf00-4369-ad75-69a32f78450d.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=50&id=ue096fba6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=100&originWidth=1104&originalType=binary&ratio=1&rotation=0&showTitle=false&size=22118&status=done&style=none&taskId=u67d8b000-7248-4cd4-82aa-445e2190d24&title=&width=552)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216074460-2df78037-6d1c-4dd7-8a52-1d745d1865a1.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=490&id=u0f3403e2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=980&originWidth=1036&originalType=binary&ratio=1&rotation=0&showTitle=false&size=172917&status=done&style=none&taskId=u5f351b4e-0f94-4c73-b7e1-5bb74f91547&title=&width=518)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216441808-498cebdd-9244-4cd2-b287-ff0ca6e930e3.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=350&id=ube1bb889&margin=%5Bobject%20Object%5D&name=image.png&originHeight=699&originWidth=1221&originalType=binary&ratio=1&rotation=0&showTitle=false&size=82316&status=done&style=none&taskId=uf9e800c5-3e30-450f-bc46-1344b0ccde4&title=&width=610.5)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216154566-142e9f13-084f-4ac7-aa63-b5b0cd195bb3.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=358&id=u0643f283&margin=%5Bobject%20Object%5D&name=image.png&originHeight=715&originWidth=1292&originalType=binary&ratio=1&rotation=0&showTitle=false&size=125383&status=done&style=none&taskId=u60d8aab8-2bcc-4b60-a7e6-af83ae5abfb&title=&width=646)

#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216178560-aa95f073-b51e-4244-9cec-db885f90e36a.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=126&id=u857262bb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=252&originWidth=1569&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58523&status=done&style=none&taskId=u0840a08d-614f-4df1-aca2-8334b749878&title=&width=784.5)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216188689-1987f55c-d9d3-4800-b683-bb421afe4cd9.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=104&id=u87e44caa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=208&originWidth=1252&originalType=binary&ratio=1&rotation=0&showTitle=false&size=42346&status=done&style=none&taskId=ubee3ac04-c510-454f-a2b7-d9c4e2f43e8&title=&width=626)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217698208-070e8ace-75ab-471f-83fd-ffe92324aa64.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=488&id=ue6ac653e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=976&originWidth=1598&originalType=binary&ratio=1&rotation=0&showTitle=false&size=103039&status=done&style=none&taskId=ue8dc0fa4-68cf-4e18-96e1-bf5e8430cf0&title=&width=799)
### 18.用户请求头像接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216213614-722c5ea7-62a3-4b02-97f2-66473fe51441.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=40&id=u91cff345&margin=%5Bobject%20Object%5D&name=image.png&originHeight=79&originWidth=717&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18523&status=done&style=none&taskId=u9ae9d2fe-af87-4823-a972-b548e73415e&title=&width=358.5)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216278987-34a71b4b-d9f6-4e80-b574-32c3ae6a84d0.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=520&id=u691b6659&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1039&originWidth=1334&originalType=binary&ratio=1&rotation=0&showTitle=false&size=197174&status=done&style=none&taskId=u0ed72e5d-24c7-4011-af78-8394a81451f&title=&width=667)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216297875-cfaecce8-4b96-4c4a-a258-321af7043f68.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=118&id=ueed95683&margin=%5Bobject%20Object%5D&name=image.png&originHeight=236&originWidth=1200&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39758&status=done&style=none&taskId=ubbff00eb-9377-4b0b-9f7d-957d9093867&title=&width=600)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217786020-0fae2a15-1454-405e-96ef-215fadf3b073.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=623&id=uebb06db5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1245&originWidth=1993&originalType=binary&ratio=1&rotation=0&showTitle=false&size=613658&status=done&style=none&taskId=u311ce928-979c-4cb6-8728-1cd4d223c1c&title=&width=996.5)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217833446-392301d3-4e34-46a0-b006-8fb1ef48df97.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=763&id=u4f3573e5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1526&originWidth=2419&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1799095&status=done&style=none&taskId=u49484da5-1618-4217-825f-103520ed8ef&title=&width=1209.5)
### 19.上传动态配图接口
#### 路由
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216369923-7f59f5ba-65c1-49e9-b1f8-744c17510a9c.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=52&id=u3f7ef8c8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=104&originWidth=1161&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21449&status=done&style=none&taskId=u8f26eda2-9827-43d0-9fb9-e4c82ae4c4f&title=&width=580.5)
#### 中间件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216395514-e4c8b60c-0cd8-4fb9-854b-ea0ee3a87bcd.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=476&id=ue28f29ad&margin=%5Bobject%20Object%5D&name=image.png&originHeight=952&originWidth=936&originalType=binary&ratio=1&rotation=0&showTitle=false&size=170785&status=done&style=none&taskId=u7bd8e0b3-7d85-4ee6-bfd4-2c8b5d869cf&title=&width=468)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216465679-7f8e4d19-ea78-4ffc-adbb-8a2e246f9324.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=357&id=u08764464&margin=%5Bobject%20Object%5D&name=image.png&originHeight=713&originWidth=1164&originalType=binary&ratio=1&rotation=0&showTitle=false&size=90675&status=done&style=none&taskId=u4b8de328-cf14-471c-be5d-81538461812&title=&width=582)
#### 控制器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216559860-fc58c0a7-e465-4f87-98c6-b70c39b12557.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=335&id=ue1085c7d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=669&originWidth=1231&originalType=binary&ratio=1&rotation=0&showTitle=false&size=95717&status=done&style=none&taskId=u2d44a08e-9388-417d-ac49-bfc08bb288b&title=&width=615.5)
#### 服务器
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658216567652-f56d0be2-e3ec-4951-a0ac-aa107417ea4d.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=98&id=ua6e7e7c3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=196&originWidth=1732&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58117&status=done&style=none&taskId=ub66e8667-7934-41a8-a5bd-add8aca4ff0&title=&width=866)
#### 接口验证
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25995508/1658217864699-0d9439a2-ca53-49eb-8f09-54ed87f62d51.png#clientId=u4170f90e-ded1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=498&id=u939e0986&margin=%5Bobject%20Object%5D&name=image.png&originHeight=996&originWidth=2012&originalType=binary&ratio=1&rotation=0&showTitle=false&size=146517&status=done&style=none&taskId=u1738b8e1-0675-4b87-8c28-86e778a20a1&title=&width=1006)
