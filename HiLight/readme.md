# JavaScript原型链，依我之见
- 每当提及JS原型链时，大多初学者都对其谈虎色变，唯恐避之不及。今天我就来为大家驱散脑海中JS原型链的迷雾。  

## 前言
在开始解析原型链之前你需要细致地了解以下知识点
1. 什么是构造函数
- 任何函数只要使用 new 操作符调用就是构造函数，而不是用 new 操作符的就是普通函数。构造函数常常用来工厂化生产一堆具有相似属性和方法的对象。
```javascript
// Cat()就是一个构造函数
var Cat = function (name,color) {
    this.name = name;
    this.color = color;
    this.sayName = function(){
        console.log('name:'+this.name);
    }
}

var cat = new Cat("喵喵","米色");
```
- **然而构造函数却有个天生的缺点，不仅无法共享属性和方法，而且会造成资源浪费**

2. 什么是实例
- 实例通过构造函数生成的一个对象
```javascript
var Cat = function (name,color) {
    this.name = name;
    this.color = color;
    this.sayName = function(){
        console.log('name:'+this.name);
    }
}
```
3. 什么是原型对象

4. 什么是JS原型链？
-  每个构造函数都有一个原型对象，构造函数的内部有个protype属性指向这个函数的原型对象，而这个构造函数实例化出的实例对象也有有个__proto__属性能够指向这个原型对象。原型对象也是一个对象，所以说原型对象相应的也有一个相应的构造函数和原型对象。因而这种一环紧扣下一环的链式关系称为原型链。
