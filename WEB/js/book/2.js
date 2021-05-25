class Bar {
    dostuff(){
        console.log('stuff');
    }
}
const b = new Bar();
b.dostuff();
console.log(b.constructor  === Bar.prototype.constructor);