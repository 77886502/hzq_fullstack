const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();
// 防止端口冲突
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.set({
        'Content-Type': 'text/html;Charset=utf-8'  // text/相应方式(html、json...),Charset：编码方式
    })  // 设置编码，解决end出现的编码不统一的乱码问题
    res.end(`<h1>你好</h1>`); //会出现编码问题
    // res.send('你好');
})

// 定义url
const typeDefs = gql`
    type Query{
        hello:String
    }
`  // 提供了定义查询的新语言，模型定义
// 定义具体的查找方法
const resolves = {
    Query: {
        hello:()=>`hello world!`
    }
}

const server = new ApolloServer({ typeDefs, resolves }); //apollo服务器
server.applyMiddleware({
    app, //给当前app
    path:'/api' // 提供API服务 api开发   后端做整个站
})

app.listen(port,)