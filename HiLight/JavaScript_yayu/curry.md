# JavaScript专题之函数柯里化

##
将有多个参数的函数转换成一系列使用一个参数的函数技术。

举例说明一下：
```js
function add(a,b){
    return a+b;
}
// 执行add函数 一次传入两个参数
console.log(add(1,2));

// 假设有一个 curry函数可以做到柯里化
var addCurry = curry(add);
console.log(addCurry(1)(2)); //3
```
## 用途
我们会讲到如何写出这道curry函数,并且将这个curry函数写的很强大，但是在编写之前，我们需要知道柯里化到底有什么用？

curry用途:参数复用。

如果我们仅仅是把参数一个个传进去，意义可能不大，但是如果我们是把柯里化后的函数传给其他函数比如map呢？

举个例子:

比如我们有这样一段数据：
