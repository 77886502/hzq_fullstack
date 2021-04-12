const fs = require("fs");
const path = require("path");
const Mock = require("mockjs");
const JSON5 = require("json5");

function getJsonFile(filePath) {
    let json = fs.readFileSync(path.resolve(__dirname,filePath),'utf-8');
    return JSON5.parse(json);
}





module.exports = function (app) {
    // 监听app请求
    app.get("/user/userinfo",  
        function(req,res){
        // 每次响应请求的时候读取mock data的json文件
        // getJsonFile方法定义了如何读取json文件并解析成数据对象
        let json = getJsonFile('./userInfo.json5');
        // 将json传入 Mock.mock 方法，生成数据返回浏览器
        res.json(Mock.mock(json));
        }
    );
}