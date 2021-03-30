function Animal(){
    this.type = 'animal',
    this.say = function(){
        console.log('wow!');
    }
}
function Dog(name,age){
    this.name = name;
    this.age = age;
}
Dog.prototype = new Animal();

let doge = new Dog('doge',7);