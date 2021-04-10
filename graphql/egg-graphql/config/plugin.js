'use strict';
// 一切服务都可以是插件 koa 好用，但简单，满足不了大型
// 有一个大家都公认的约定更好
// 只要配一下立马可以用了
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize:{
    enable:true,
    package:'egg-sequelize'
  }
};
