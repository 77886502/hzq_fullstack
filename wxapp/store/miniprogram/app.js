//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  //全局的列表查询方法
  // setName 表名
  // ruleItem 条件
  // orderFun 排序方式 升序 降序
  getInfoByOrder(setName, ruleItem, orderFunc, callback) {
    const db = wx.cloud.database();
    db.collection(setName) // 边接数据表 mongodb 没有严格的字段 tmpPictures  json文档document mysql 关系型 mongodb 文档型
    .orderBy(ruleItem, orderFunc)
    .get() // promise 
    .then(callback) // 回到页面去  
    .catch(console.error) // 容错处理
  }
})
