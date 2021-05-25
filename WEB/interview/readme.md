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

# 当你在浏览器输入一个url后，
# 当你有了一台服务器后，可以干什么
  docker 一台物理主机 虚拟出很多云服务器
  - IP
    124.70.164.124 ？ 提供什么服务？ 可以看到网页呢
    浏览器域名或IP访问 https
    centor 7.6 web 服务器
    Nginx 是一个高性能的HTTP和反向代理的web服务器

  1. 第一步 配置nginx
  - putty 远程 SSH 链接 华为云的服务器
    root password
    web服务 Nginx 安装
    安装ngnix 的依赖
     yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
     yum -y install wget httpd-tools vim
     yum install nginx
       nginx（启动服务器）
     ps aux | grep nginx