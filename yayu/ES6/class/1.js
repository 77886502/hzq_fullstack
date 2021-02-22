// ES6 提供了 class 关键字
// 语法糖，其实它还是原型式继承
// 像大型语言，传统的面向对象的写法
class Person { // 不是json object 是面向对象的语法糖 
    // 新的写法
    state = {
        count: 0
    }
    constructor(name){
        this.name = name;
    }
    sayHello() {
        return 'hello, I am '+ this.name;
    }
}

const kevin = new Person('Kevin');
// 可访问，不可枚举 ES6 属性和方法更细节的功能。

// console.log(kevin.sayHello());
// Person();
// ES6 里可枚举怎么实现？
console.log(Object.keys(Person.prototype)); // 可枚举的属性
console.log(Object.getOwnPropertyNames(Person.prototype));