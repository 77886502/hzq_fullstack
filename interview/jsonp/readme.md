# 跨域
  - JSONP json with padding
  https://photo.sina.cn/aj/index?page=1&cate=recommend
  同源机制

 1. 通过script\ img src 跨域向sina 发出了请求 http 
 规避了js代码xhr fetch 同源机制
 2. &callback=callback
    sina 在页面上有一个callback的函数，等待你的调用;
    callback({"data":[{"a":1}]})
 3. callback({}) JSON+padding
 4. xhr/fetch 因运行在沙箱中的JS同源机制 无法请求跨域sina资源
 迂回到使用scirpt标签 有跨域访问资源的能力，http请求中带上&callback = callbcak 这个padding，sina服务器就在JSON数据外面包一层callback函数，将这个带有padding的，可以在script的得到后运行的函数，页面上已经准备好这个函数 