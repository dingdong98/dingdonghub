const labelservice = require('../service/label.service');

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body;
    const result = await labelservice.create(name);
    ctx.body = result;
  }

  async list(ctx, next) {
    const {limit , offset} = ctx.query;
    console.log(limit,offset)
    const result = await labelservice.list(limit, offset)
    ctx.body = result;
  }
}
module.exports = new LabelController();