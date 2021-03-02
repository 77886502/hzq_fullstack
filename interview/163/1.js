// symbol
// ES6 引入的新的原始数据类型Symbol,表示独一无二的值
// let sym1 = Symbol();
// let sym2 = Symbol('foo'); // 唯一的
// let sym3 = Symbol('foo');
// console.log(sym1 == sym3);
// console.log(typeof sym1);
// 1. 函数来创建, 原始数据类型 冲突的地方？ 如何说明
// 用法上有什么区别
// new Symbol(); // Symbol is not a constructor


// 变量都是要分配内存空间的，原始数据类型 栈分配 引用数据类型 堆分配

// Symbol(字符串)？ 有何用？ 做一个标识
// console.log(sym3.toString());
// 
var mySymbyol = Symbol() //初始化
// var shapeType = {
//     // 初始化
//     triangle:'Triangle',//三角形
//     square:'Square' //正方形

// }
var shapeType = {
    trangle: Symbol(), 
    square: Symbol()
}
// swicth case  属性的值可以用Symbol()  Symbol() 唯一值
function getArea(shape,options){
    var area = 0;
    switch(shape){
        case shapeType.triangle:
            area = 0.5 * options.width * options.height;
        break;
        case shapeType.square:
            area = options.width * options.height;
        break;
    }
    return area;
}
// console.log(getArea(shapeType.triangle,{
//     width:100,
//     height:100
// }));
// var s1 = Symbol('foo');
// console.log(s1 instanceof Symbol); // 原始数据类型
// const obj = {
//     toString(){ //  覆盖Object.protype.toString()
//         return 'abc'
//     }
// }
// const sysm = Symbol(obj);
// console.log(sym.toString());
// var sym = Symbol('my symbol');
// console.log('your symbol is'+sym); Cannot convert a Symbol value to a string
// sysmbol 可以用于 json key 表示唯一
// sysmbol 最为json key 第二种引用场景
// sysmbol 作为key不可枚举
var obj = {};
var a = Symbol(); // 可以用于JSON object key
var b = Symbol();
obj[a] = 'Hello'; // 偷懒 
obj[b] = 'world';
obj.cc = 'cc'; //常规 去个名字

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj)); 
console.log(obj[a]);
console.log(a,b);