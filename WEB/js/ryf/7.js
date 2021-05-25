// 阮一峰面向对象第二篇
function  Animal(name){
    this.specise = '动物'
    this.name = name;
    console.log(arguments,'---------------');
}
// 拿到函数的原型链上的方法 靠他
// 函数是一等对象 Object()是其创建
console.log(typeof Animal.__proto__.__proto__);
function Cat(name,color){
    console.log(arguments);
    Animal.apply(this,arguments);
    Animal.call(this,name,color);
    this.name=name;
    this.color=color;
    
}
// 猫应该是Animal的子类, 继承(获得其属性、方法)
var cat1 = new Cat("大毛","黄色");
console.log(cat1.specise);