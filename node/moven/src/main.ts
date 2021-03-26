// 项目的启动
import app from './app'; // 模块化的极致就是一个文件只做一件事
// app 路由， 上传文件，json化... 将给 app 去做
// 数据库的连接
app.listen(1234,()=>{
    console.log('启动服务');
})