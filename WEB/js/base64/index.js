const webp = require('webp-converter');
webp.cwebp("jingdong.jpg","output.webp","-q 80",function(status,error){
    console.log(status);
})