# 对象
JavaScript 除了基本数据类型(Number,String,Boolean,undefined,Null,Symbol,Bigint)，其他所有类型都属于对象(Object,Aarry,Function,Date,RegExp)。

**对象的属性名 `key` 可以是包括空字符串在内的任意字符串，属性值 `value` 不能是 `undefined` 。如果属性名  `key`是一个合法的`JavaScript` 标识符且不是保留字，则并不强制**

## 创建对象的两种方式

1. 使用对象字面量

```js
    let obj = {name:'cat'};   
```
> 使用对面字面量创建的对象，其原型对象是`Object.prototype`。

2. 使用Object构造函数

```js
   let obj = new Object();
   console.log(obj); // {}
```