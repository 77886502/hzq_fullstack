- 每当提及JS原型链时，大多初学者都对其谈虎色变，唯恐避之不及。今天我就来为大家解除对JS原型链的疑惑。  

## 前言
在开始解析原型链之前你需要细致地了解以下知识点
1. 什么是构造函数
- 简单地来说，构造函数都是需要用new关键字来调用，构造函数内部用this来构造属性和方法。构造函数常常用来工厂化生产一堆具有相似属性和方法的对象。(构造函数名的规范要求首字母大写)
```javascript
// Cat()就是一个构造函数
var Cat = function (name,color) {
    this.name = name;
    this.color = color;
    this.category = "猫科";
}
var cat = new Cat("喵喵","米色");
```

2. 什么是实例
- 实例可以理解为通过构造函数生成的一个对象
```javascript
var Cat = function (name,color) {
    this.name = name;
    this.color = color;
    this.category = "猫科";
    
}
// cat 就是构造函数Cat()实例化出来的一个对象
var cat = new Cat("喵喵","米色");
```
3. 什么是原型对象
- 构造函数都有个隐式的prototype属性，这个属性指向构造函数的原型对象，而每个对象都有个隐式__proto__属性，这个属性指向构造该对象的构造函数的原型对象。**原型对象包含应该由特定引用类型的实例共享的属性和方法。使用原型对象的好处是，在它上面定义的属性和方法可以被实例共享。（所以实例对象也可以调用原型对象上的constructor属性用来找构造实例的构造函数）**
```javascript
var Cat = function (name,color) {
    this.name = name;
    this.color = color;
    this.category = "猫科";
}
var cat = new Cat("喵喵","米色");
// 实例对象也可以调用原型对象上的constructor属性用来找构造实例的构造函数
console.log(Foo.prototype.constructor === f1.constructor); //true
// cat.__proto__,Cat.protype 都指向相同的原型对象
console.log(cat.__proto__===Cat.prototype); //true
```
4. __proto__属性，prototype属性,constructor属性
- __proto__属性是任何对象都有的属性指向构造该对象的构造函数的原型对象。prototype属性是函数才有的属性，prototype是通过调用构造函数而创建的那个对象实例的原型对象。原型对象上默认有一个属性constructor，将原型对象指向其相关联的构造函数。

5. 什么是JS原型链？
-  每个构造函数都有一个原型对象，构造函数的protype属性指向这个构造函数的原型对象，而这个构造函数实例化出的实例对象的__proto__属性能够指向这个原型对象。因为原型对象也是一个对象，所以说原型对象相应的也有一个相应的构造函数和原型对象。因而这种一环紧扣下一环直至顶层对象Object的原型对象结束的链条称为原型链。
```javascript
var Cat = function (name,color) {
    this.name = name;
    this.color = color;
    this.category = "猫科";
}
// cat 就是构造函数Cat()实例化出来的一个对象
var cat = new Cat("喵喵","米色");
// 原型对象也是对象
console.log(Object.prototype.toString.call(cat.__proto__));//[object Object]
// Cat的原型对象的原型对象 和 Object的原型对象相同
console.log(Cat().prototype.__proto__==Object.prototype); //true
// Object的原型对象已经到顶了，在往上就是NULL
console.log(Object.prototype.__proto__); // null
```

## 解析JS原型链
- 如何你已经大致了解了前言里的知识点，接下来将会是so eazy！首先我想要放上一张经典的JS原型链图，再做细致讲解


![avatar](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4717674c55542d3a75ae90d44df1033~tplv-k3u1fbpfcp-zoom-1.image)

### 我们依次对着箭头分析
1. 
![avatar](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecbe791c244045bbaec0fc225a5416ac~tplv-k3u1fbpfcp-zoom-1.image)
- 实例f1,f2通过__proto__属性找到原型对象Foo.prototype，构造函数Foo()通过prototype属性找到原型对象Foo.prototype。原型对象Foo.prototype可以通过constructor属性找到自己的构造函数Foo()。

```javascript
var Foo = function () {
}
var f1 = new Foo();
var f2 = new Foo();
console.log(f1.__proto__===Foo.prototype); //true
console.log(Foo.prototype.constructor === Foo);//true
```
![avatar](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c11716b8cd644ca89430335de482f19~tplv-k3u1fbpfcp-zoom-1.image)

- 构造函数Function()通过prototype属性找到原型对象Function.prototype。原型对象Function.prototype可以通过constructor属性找到自己的构造函数Function()。
```javascript
var Foo = function () {
}
var f1 = new Foo();
console.log(Foo.constructor);//[Function: Function]
```
2. 
- 原型对象Foo.prototype也是对象,通过__proto__属性找到Foo.prototype的原型对象Object.prototype
![avatar](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/569968bc788c4737bd81e9c4256063f6~tplv-k3u1fbpfcp-zoom-1.image)
```javascript
var Foo = function () {
}
console.log(Object.prototype.toString.call(f1.__proto__));//[object Object]
console.log(Foo.prototype.__proto__==Object.prototype);//true
```


3. 
- 原型对象Object.prototype已经是顶层对象了，所以它的__proto__属性为null
![avatar](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/157b15dd428e462ea43d49ec4fd5cce9~tplv-k3u1fbpfcp-zoom-1.image)
```javascript
console.log(Object.prototype.__proto__);//null
```


4. 
- 实例o1，o2通过__proto__属性找到原型对象Object.prototype，构造函数Object()通过prototype属性找到原型对象Object.prototype。原型对象Object.prototype可以通过constructor属性找到自己的构造函数Object()。
![avatar](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d26a55edbe74b00bf2e4a61768067f2~tplv-k3u1fbpfcp-zoom-1.image)
```javascript
console.log(o1.__proto__===Object.prototype);//true
console.log(Object.prototype.constructor===Object);//true
```

5. 
- **一切函数的构造函数都是Fuction()**
![avatar](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/207bd8e2906746bb8ea45f61c705b481~tplv-k3u1fbpfcp-zoom-1.image)
```javascript
var Foo = function () {
}
console.log(Foo.constructor);//[Function: Function]
console.log(Object.constructor);//[Function: Function]
console.log(Function.constructor);//[Function: Function]
```

6. 
- **一切原型对象除Object.prototype外的原型对象都是Object.prototype**
![avatar](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9c339d097f843bfb963adecf6bd950e~tplv-k3u1fbpfcp-zoom-1.image)
```javascript
var Foo = function () {
}
console.log(Foo.prototype.__proto__=== Object.prototype);//true
console.log(Function.prototype.__proto__ ===Object.prototype);//true
```
**(所有步骤都走完后，请你自己对这那张完整的图自己再走一遍，希望你有所收获)**

**以上就是本人对JS原型链的理解。如果对您有所帮助，请赏个赞。如有不妥之处，请在评论区指出。**

图片参考链接：www.cnblogs.com/smoothLily/…