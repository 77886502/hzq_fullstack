//index.js


Page({
  data: {
    active: 0,
    img:[ 'https://7468-thisme-8gagk4c60481b28b-1304815223.tcb.qcloud.la/46071c04455c0d5b.jpg!q70.jpg?sign=8fa1aa47b3c7d483e6635d827a34be2e&t=1611753597',
      'https://7468-thisme-8gagk4c60481b28b-1304815223.tcb.qcloud.la/050b0719dd2b8a7b.jpg!q70.jpg?sign=64fe0efb4a17d882fcf954798b533047&t=1611753667',
      'https://7468-thisme-8gagk4c60481b28b-1304815223.tcb.qcloud.la/f382bbe504e77d63.jpg!q70.jpg?sign=e383754b1318f985440132be251a5c0d&t=1611753685'
      ]
  },
  toSearch(){
    wx.navigateTo({
      url: '/pages/search/search'})
  },
  toCategory(){
    wx.navigateTo({
      url: '/pages/category/category'})
  },
  toCart(){
    wx.navigateTo({
      url: '/pages/cart/cart'})
  }, 
  toUser(){
    wx.navigateTo({
      url: '/pages/user/user'})
  }

  

})
