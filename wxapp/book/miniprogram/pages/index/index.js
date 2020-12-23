// 云数据库
const db = wx.cloud.database();
const userInfo = db.collection('userInfo')
Page({
  data:{
    userList: []
  },
  navigatTo(){

  },
  // 获取用户信息
  getUserInfo(result){
    // console.log(result.detail.userInfo);
    // 一切云开发 在未来都是从调用一个函数开始
    // 登录
    // 一次上云事件
    wx.cloud.callFunction({
      name: 'getOpenId',
      // 回调函数 
      complete: res => {
        // 继续怎么做
        console.log(res)
        userInfo.where({
          //用户的opneId是唯一的
          // 去云端就是为了opnenId
          _openid:res.result.openId
        }).count()
        .then(res =>{
          console.log(res);
          // 新用户
          if (res.total == 0)
          {
            userInfo.add({
              //一定要有data字段 一个JSON
              data: result.detail.userInfo
            }).then(res => {
              wx.navigateTo({
                url: '../add/add',
              })
            }).catch(err => {
              console.error(err)
            })
          }
          else {
            wx.navigateTo({
              url: '../add/add',
            })
          }
        })
      }
    })
  }
})