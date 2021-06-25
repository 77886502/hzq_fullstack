// ES3 声明常量
// var BASE_URL = 'http://es.xiecheng.com';
// BASE_URL = 'http://www.imooc.com';
// console.log(BASE_URL);

// ES5 声明常量
// Object.defineProperty(window, 'es', {
//     value: 'es6',
//     writable: false
// });
// console.log(es);
// es = 'ES2015';
// console.log(es);

// ES6 声明
// const es = 'es6';
// es = '2015'; // error
// console.log(es);

var obj = {
    id: 1
}
Object.freeze(obj);
obj = {
    id:2
}
console.log(obj);

// 冻结
function myFreeze(obj){
    Object.freeze(obj);
    Object.keys(obj).forEach(
        function(key){
            if(obj[key] instanceof Object){
                myFreeze(obj[key]);
            }
        }
    )
}