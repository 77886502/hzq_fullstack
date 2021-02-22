// 启动web服务  http -> ? websocket 
const express = require('express'); // 网站的实例
const app = express();
const http = require('http').Server(app); // node 内置模块http
const io = require('socket.io')(http); // websocket io对象 
// http 请求， 一去一来
console.log(__dirname);
app.get('/', (req, res) => {
    // res.send('燕侠， 百度'); __dirname 当前项目的绝对路径
    res.sendFile(__dirname + '/index.html');
})
app.listen(2000, () => {
    console.log('http web 服务跑起来了');
}) // http协议， 让他在某个端口， 服务器， 