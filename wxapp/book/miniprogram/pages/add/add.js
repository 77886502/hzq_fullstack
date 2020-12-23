// miniprogram/pages/add/add.js
const db = wx.cloud.database();
const photos = db.collection('photos');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  upload(){
    wx.chooseImage({
      count:9,
      // 压缩与否 
      sizeType: ['original', 'compressed'],
      // 相册， 拍摄
      sourceType: ['album', 'camera'],
      success: res => {
        // 拿到图片文件 
        console.log(res);
        const tempFilePaths = res.tempFilePaths
        //每张图片单独做
        for(var i = 0; i < tempFilePaths.length; i ++ ){
          // 生成图片的名字
          let randString = Math.floor(Math.random() * 1000000).toString() + '.png'
          // 向云端上传文件
          wx.cloud.uploadFile({
            // 目的地址
            cloudPath: randString, // 上传至云端的路径
            // 文件地址
            filePath: tempFilePaths[i], // 小程序临时文件路径
            success: res => {
              photos.add({
                // 向photos 表 加入
                data: {
                  image: res.fileID
                }
              }).then(res => {
                // 成功了 toast 提示框
                wx.showToast({
                  title: '上传成功',
                  icon: 'success'
                })
              })
            },
            fail: console.error
          })
        }
      
      },
      fail: err => {
        console.error(err)
      }
    })

  }
})