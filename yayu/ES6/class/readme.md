- ES6 class 与 ES5 构造函数+prototype 有什么关系?
    语法糖  哪些？
- babel babel 的使命就来了
    ES6 class 不停地更新， 每个版本，意义。
    node 版本 运行环境不一样。
    babel 负责
    js的运行环境太复杂了，不是单纯的chrome,ie,qq, 支持不同的版本
    node 不同版本 
    babel 解决这些, 写出来的
- 一些供公司问？
    请问ES6 class 关键字实现除了刚刚讲的，有什么不一样的地方？
    - ES6 class 构造函数在custruor()
        只能被new，不能作为普通函数执行。
        - 如果要你去设计的话？ 怎么实现呢？
    - Person.prototype class定义的 不可枚举 
        Object.keys() //列举可枚举
        Object.getOwnPropertyNames() //列举可调用
    - ES6 还有比ES5 实现更丰富的地方
        es6 声明属性的时候有个高级的写法？
    - 手写一个 babel 

1. babel js 转义 帮助 ES6 class -> ES5 function