# js 有没有可能
考点？
```js
// a
console.log( a == 1 && a == 2 && a==3 ) // true?
```

把神三元的所有输出全部照单查收
JS灵魂拷问
7种简单数据类型
null是对象嘛？typeof null // object
JS存在的一个bug,最初的版本中使用的32位系统
二进制，前3位是用来标明它so什么类型的，
undefined   null 0000000000000000000000000000
{}  3位 000 Object
typeof 3位
为了性能考虑存储变量的类型信息 000 Object
Object.prototype.toString() // 类型转换

# '1'.toString()
> 五种基本类型除了null、undefined以外都有与之对应的特殊的引用类型——包装类型。当代码被解释执行时，底层会对基本类型做一个类型转换，即将基本类型转换成引用类型，这样就可以调用相应引用类型有权访问到的方法。
String -> Object上的
Object 是所有对象的原型对象，Array Function ... String
简单数据类型 不会有方法
1. 创建包装实例 new String('1')
2. 调用实例 '1'.toString() s.toString()给回去
3. 使用 s = null 执行完方法 立即销毁
？想不起
