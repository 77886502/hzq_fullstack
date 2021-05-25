const superagent = require("superagent");
const api = "https://movie.douban.com//j/search_subjects";

// common.js CMD es6模块化
module.exports = (pageStart) =>{
    /*
        XMLHttpRequire 
        axios前后端都能使用 
        JS兼容性
        浏览器嗅探模式
    */ 
    return new Promise((resolve,reject)=>{
        superagent
            .get(api)
            .query({
                pageStart,
                "type":"tv",
                "tag":"日本动画",
                "sort":"recommend",
                "page_limit":20
            })
            .type("form")
            // .accept("application/json")
            .end((err,res)=>{
                if(err) reject(err);
                let resObj = JSON.parse(res.text);
                console.log(resObj);
                resolve();        
            })
    })
}