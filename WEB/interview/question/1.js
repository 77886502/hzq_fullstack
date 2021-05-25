var a = [1,2,3];
// 
// a.join = a.shift;
let a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3) //true

const a = {
    value: [1, 2, 3],
    valueOf:function(){return this.value.pop()}
}
console.log(a == 1 && a == 2 && a == 3);  //true
