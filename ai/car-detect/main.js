//console.log('AI来了,帅!')
//require 引入模 块的关键字
//图像识别
const AipocrClient = require('baidu-aip-sdk').ocr;
//内置模块 fileSystem
// const fs = require('fs');
// 1. 读入文件 I/O操作 从硬盘读入内存中，

const APP_ID="23078069";
const APP_KEY= "nowp4yXKY3Ie5pbXl0WQzYU6";
const SECRET_KEY="R9UyNGinSTvzqMY0CexZGO5L3hDjwng4";
const client = new AipocrClient(APP_ID,APP_KEY,SECRET_KEY);
const image = fs.readFileSync("car_id.jpg").toString("base64"); 
const fs = require('fs');
const options={};
options["multi_detect"]="true"

client
    .licensePlate(image,options)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err)
    })