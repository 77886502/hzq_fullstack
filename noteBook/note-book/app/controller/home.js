'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      title: '标题栏'
    })
  }
  async test() {
    const { ctx } = this
    ctx.body = '测试接口'
  }
}

module.exports = HomeController;
