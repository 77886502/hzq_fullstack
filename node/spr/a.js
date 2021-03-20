// node
const tencenttime = require('./tencenttime');
// 事件监听是如何实现的？
tencenttime.on('newlesson',({price}) =>{
    if(price < 80)
    {
        console.log('ok,buy it');
    }
})