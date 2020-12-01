// console.log('AI','来了')

// node 引入模块关键字
const AipOciClient = require('baidu-aip-sdk').ocr;//图像识别

//  1. 读入文件 I/O操作 从硬盘中读入内存中
const fs = require('fs');// 内置模块 文件系统 fileSystem
const APP_ID = "23078069";
const API_KEY = "nowp4yXKY3Ie5pbXl0WQzYU6";
const Secret_Key = "R9UyNGinSTvzqMY0CexZGO5L3hDjwng4";

const client = new AipOciClient(APP_ID, API_KEY, Secret_Key);
const immage = fs.readFileSync("car_id.jpg").toString("base64");
const options = {};
options["multi_detect"] = "true"

client
    .licensePlate(immage, options)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })