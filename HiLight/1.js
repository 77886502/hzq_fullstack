// 函数柯里化 将有多个参数的函数转换成一系列使用一个参数的函数技术
function add(a,b){
    return a+b;
}
console.log(add('a'));

// var addCurry = curry(add);
// console.log(addCurry(1)(2)); 3
