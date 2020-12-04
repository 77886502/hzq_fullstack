let fetch = require("node-fetch"); //内置
let cheerio = require('cheerio');
let url = 'http://movie.douban.com/top250';
const main = async() => { // async 关键字
   fetch(url)
      
        .then(res => res.text())
        .then(body => {
           let $ = cheerio.load(body);
           let movieNodes = $('content.item');
           console.log(movieNodes)
        });
}
main();