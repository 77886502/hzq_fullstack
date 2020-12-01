//console.log('AI来了,帅!')
//require 引入模 块的关键字
//图像识别
const ApiImageClassfyClient =require('baidu-aip-sdk').imageClassify;
//内置模块 fileSystem
// const fs = require('fs');
// 1. 读入文件 I/O操作 从硬盘读入内存中，
const APP_ID="23077959";
const APP_KEY= "ajmGqvo6baLQG6kT5aR4vpxy";
const SECRET_KEY="xOQPERPEZcPeLTopfZdG3uMmhgyqOB8I";
const client = new ApiImageClassfyClient(APP_ID,APP_KEY,SECRET_KEY);
const fs = require('fs');
const image = fs.readFileSync("car.jpg").toString("base64");

client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err)
    })