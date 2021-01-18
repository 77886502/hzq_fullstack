'use strict';
var obj = {
    bar:1,
    foo:function(){
        console.log(this.bar);
    }
}
var foo = obj.foo; // foo函数
var bar = 2;
obj.foo(); // this 会指向 obj 本身，函数调用的方式,作用域运行环境 ? 对象上的方法
foo(); // this? 普通函数 
