- Vscode 是用typescript 写出来的
- JS 弱类型 超集
    java 静态编译能了 先编译 后运行
- 在阿里 大型项目用ts 代替JS
    给JS 加上类型约定
- stylus
    写的是ts，最后运行的JS

-html 不再是html，字符串模板``,
-css 不再是css stylus/sass/less
-js 不再是js ts


- 提前分析js里容易发生错误的地方
    用接口或自定义类型来严格要求
- 数据源都要给他加上自定义类型定义
- unkonw ts的关键字
- ? 有或没有都可以
- | 或者前面或后面这个类型
- 在user变这种类型, 有一两个字段是不一样的
    我们可以通过定义子类型 | 拼接起来, 实现类型的二选
- <Admin> 泛型 去做类型的推导
- key in 高效的避免
1. type 为何
    ts就是在js的基础上, 做一些类型相关
        uses forEach
        严谨一些
        数据是users 每个用户的数据不一致的话
        forEach 会产生问题
