let dog = {
    name:"dog",
    type:[],
    sayName: function(){
        console.log(`My name is ${this.name}`)
    }
} 
let doge = Object.create(dog);
let cheems = Object.create(dog);
doge.name = "doge";
console.log(doge.name);

doge.type.push("doge");
console.log(cheems.type);