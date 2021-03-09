const express = require('express');
const app = express();
//  这是什么？ process node的内置对象 进程 前端的window
//  进程里，运行环境 env PORT 端口
//  如何从env 拿到PORR 设置，默认4000
//  环境 crpss-env

const port = process.env.PORT || 2000
console.log(process.env.PORT);
app.get('/', (req, res) => res.send("hello world, 明队长！"))
app.listen(2000, () => console.log('Listing on port 2000!'))
app.listen(port,()=> console.log(`Listing on port ${port}`));