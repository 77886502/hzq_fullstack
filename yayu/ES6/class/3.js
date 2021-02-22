// 读懂源码
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function')
    }
}

var Person = (function() { // 立即执行函数
    //闭包
    // class  方法不可以被enum  
    function Person(name) {
        _classCallCheck(this, Person);
        this.name = name;
    }
    
    return Person;

})()
console.log(Person);

var person = new Person("ysw");
