// JS中的类型转换 有关  
// JS只有三种类型转换 转换成数字 转换成布尔值 转换成字符串 隐式类型转换 显示类型转换
let obj = {name:'obj'} // 引用类型
console.log(obj.toString());// [object Object] 区分  null
console.log(typeof null); // object
console.log(Object.prototype.toString.call(null)); //[object Null]
// 不可运行，'1' 简单数据类型, .toString()  新手
// 字符串 对象
// JS提供了包装类型 Number() String() Boolean() 包装类型
// 区别与引用类型
console.log('1'.toString()); // 可执行吗？ 为什么？ 
// 执行瞬间 '1'转换成字符串对象 调用toString() 完成立即销毁

// let s = new Object("1");
var s1 = 'some text';
console.log(typeof s1);
console.log(s1.toString());
s1.color = "red";
console.log(s1.color); // undefined
