// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:['https://626f-book-6gucu2gy5f236739-1304585126.tcb.qcloud.la/f382bbe504e77d63.jpg!q70.jpg?sign=1fd742535d968e9b4ce9115f8c66b1be&t=1612066190',
    'https://626f-book-6gucu2gy5f236739-1304585126.tcb.qcloud.la/46071c04455c0d5b.jpg!q70.jpg?sign=1d7c569b4c36a52d123e555a3e1a9f93&t=1612066225',
    'https://626f-book-6gucu2gy5f236739-1304585126.tcb.qcloud.la/050b0719dd2b8a7b.jpg!q70.jpg?sign=a1b3688fe051095873c0effedd7b87b2&t=1612066236'],
    list:[],
    nav:[]
  },
  toSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  toDetail(){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.cloud.database().collection('nav').get()
      .then(res => {
        this.setData({
          nav:res.data
        })
      })
      .catch(err=> {
        console.log('请求失败',err)
      })
      //  es6写法
      wx.cloud.database().collection('goods').get()
        .then(res => {
          this.setData({
            list:res.data
          })
        })
        .catch(err=> {
          console.log('请求失败',err)
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})