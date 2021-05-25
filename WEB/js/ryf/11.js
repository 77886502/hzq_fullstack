function extend(Child,Parent) {
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
    
}
extend(Cat,Animal);
var cat1 = new Cat();
console.log(cat1.species);