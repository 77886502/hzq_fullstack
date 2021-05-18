const http = require('http');
const server=http.createServer((req,res)=>{
    const {url,method,headers} = req;
    res.write(`url: ${url}\n method: ${method}\n headers:${JSON.stringify(headers,null,"\n")}`)
    res.write('Hello\n');
    res.end();
});
server.listen(8080,()=>{
    console.log('服务已启动')
})
