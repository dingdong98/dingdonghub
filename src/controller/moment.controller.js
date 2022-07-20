const fileService = require('../service/file.service');
const momentService = require('../service/moment.services')
const fs = require('fs')
const {PICTURE_PATH} = require('../constants/file-path')
class MomentController {
  async create(ctx, next) {
    // 1.获取数据（users_id，content）
    const userId = ctx.user.id;
    const content = ctx.request.body.content;
    
    // 2.将数据插入到数据库中
    const result = await momentService.create(userId, content);
    ctx.body = {
      status: 200,
      message: '发布动态成功',
      result
    };
  }

  async detail(ctx, next) {
    // 获取用户数据（momentId）
    const momentId = ctx.params.momentId;

    // 根据id去查询这条数据
    const result = await momentService.getMonentById(momentId);
    ctx.body = result;
  }

  async list (ctx, next) {
    // 获取用户列表数据(offset，size)
    const { offset, size } = ctx.query;

    // 查询列表
    const result = await momentService.getMomentList(offset, size);
    console.log('1')
    ctx.body = result;
  }

  async update(ctx, next) {
    // 1.获取用户id和内容id
    const { momentId } = ctx.params;
    const { content } = ctx.request.body;
    const { id } = ctx.user;
    
    // 2.更新内容
    const result = await momentService.update(content, momentId);
    ctx.body = result;
  }

  async remove (ctx, next) {
    // 1. 获取内容id
    const { momentId } = ctx.params;

    // 2. 删除内容
    const result = await momentService.remove(momentId);
    ctx.body = result;
  }

  async allLabels(ctx, next) {
    // 拿到动态和标签
    const { labels } = ctx
    const { momentId } = ctx.params;
    
    // 给动态添加标签
    for(let label of labels) {
      // 判断标签是否和动态有关系
      const isExist = await momentService.hasLabel(momentId, label.id);
      if (!isExist) {
        await momentService.allLabels(momentId, label.id);
      }
    }
    
    ctx.body = {
      state: '200',
      message: '给动态添加标签成功'
    }
  }
  
}
module.exports = new MomentController();