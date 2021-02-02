// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'xxx',
    sw:true,
    inputVue: 'Hi',
    age:18,
    arr:['张三','李四','王五']
  },
  mix(){
    this.setData({
        name:'HiLight'
    })
  },
  switch(){
    console.log("前:"+this.data.vue);
    this.setData({
      sw:!this.data.sw
    })
    console.log("后:"+this.data.vue);
  },
  getInput(e) {
    // e 就是事件 event
    this.setData({
      inputVue: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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