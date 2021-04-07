const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql').graphqlHTTP;
// const useSchema = require('./graphql/user/schema');
// app.use('graphql',graphqlHTTP({
//     schema:useSchema,
//     graphiql:true
// }))
// 数据从 MySQL 来 前端 => graphql => MVC => 数据库
app.listen(1514);