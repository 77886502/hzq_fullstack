# 把面试题当高考题
  1.以题目来检验当前JS之所学 推动之
  2.衡水一中    
    每日打卡 课后做的任何事情
    能力增长点  JS能力

- null和defined的区别是什么?
    Object.prototype.__proto__ ==

    undefined 意义是类型，当一个声明了一个变量未初始化时
    得到的是undefined
    1.箭头函数和普通函数不一样
        es5时代的arguments 有用的
        箭头函数没有内置对象agruments
        () => {} fuction () {}都可以省 argument 但是es6里提供了... rest 运算符

    2.Object的原型对象
    new Object()
    Object(函数).prototype
    父(原型)对象
    new Object(函数).prototype.__proto__
    为什么？Object是顶层对象 到顶了 不该有对象
    null 此处没有对象,不该有值

  - 选择元素可以通过标签、id、选择器()、类名、子元素
    任何元素都有这些方法，不仅限document
        