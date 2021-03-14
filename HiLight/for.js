var n = 10
function fn(){
    var n =20
    function f() {
       n++;
       console.log(n)
     }
    f()
    return f
}

var x = fn() // 21
x() // 22
x() // 23
console.log(n) // 10

