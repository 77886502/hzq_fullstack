// app创建以及基本配置 中间件 面筋
// es6 module typescript => => js
import bodyParser from 'body-parser';
import express from 'express';
import postRouter from '../post/post.router';
import userrouter from '../user/user.router';
import {defaultErrorHandler} from './app.minddleware';
const app = express();
const bParser = require('body-parser');
// app 处于侍服状态 eventEmitter
// body处理 加中间件 bodyParser
app.use(bParser.urlencoded());

// 中间件来打理 函数
// 所有的路由都在这里汇总
app.use( // 函数
    // 文章模块的路由存，删 改 查
    userrouter,
    postRouter,
    // 用户路由
    // ...

)
// 处理各种错误
app.use(defaultErrorHandler);
export default app;