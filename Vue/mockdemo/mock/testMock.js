const Mock = require("mockjs");
let id = Mock.mock("@id");
let obj = Mock.mock({
    id:"@id",
    username:"@cname", // 随机生成中文名字
    date:"@date",
    // 生成参数 size background foreground text
    avatar:"@image('200x200','red','#fff','avatar')",
    description:"@paragraph()",// 描述
    ip:"@ip",
    email:"@email()",
})
console.log(obj);