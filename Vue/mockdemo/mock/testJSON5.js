const fs = require("fs");
const path = require("path");
const JSON5 = require("json5");
let json = fs.readFileSync(path.join(__dirname,'./userInfo.json5'),'utf-8');
let obj = JSON5.parse(json);
console.log(obj)