function Animal() {
}
Animal.prototype.species="动物"

function Cat(name,color){
    this.name=name;
    this.color=color;
    
}
var F = function(){}; //空的构造函数 空对象
F.prototype = Animal.prototype;
Cat.prototype = new F(); //没有2的效率的问题 没有3的修改父的问题
Cat.prototype.constructor = Cat;

var cat1 = new Cat('小花','白色');
console.log(Animal.prototype.constructor);
console.log(cat1.species);
