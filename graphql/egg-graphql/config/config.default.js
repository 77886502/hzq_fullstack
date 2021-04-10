/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1617880968797_9094';

  // 数据库连接配置一下
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    password: 'asd123',
    port: 3306,
    database:'try_egg_graphql'
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};