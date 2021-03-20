const koa = require('koa');
const app = new koa();
const mount = require('koa-mount');
const fs = require('fs');

app.use(
    // app 运行在内存中
    // views/index 硬盘中
    // 1. 调入内存 fs await
    // 2. 发送
    mount('/', async (ctx) => {
        ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8');
    })
)

app.listen(3000);
