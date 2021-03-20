const EventEmitter = require('events').EventEmitter; // KOA extends EventEmitter
// 用户来访问的时间
// 网站就是一个订阅发布者模式
// 发布事件
class Tecenttime extends EventEmitter {
    constructor(){
        super();
        setInterval(() =>{
            this.emit('newlesson',{
                price:Math.random()*100
            }) // 触发事件
        },2000)
    }   
}

module.exports = new Tecenttime;




