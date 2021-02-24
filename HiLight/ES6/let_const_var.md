# `var`，`let`，`const` 速记
在ES5中，通常使用关键字 `var` 来声明一个变量
```js
var a = 1; // Number 类型
var b = '2'; // String 类型
var c = [1,2,3]; // Array 类型
``` 

而 `ES6` 提供了一种新的声明变量方式，使用关键字 `let` 来声明一个变量。
```js
let a = 1; // Number 类型
let b = '2'; // String 类型
let c = [1,2,3]; // Array 类型
```

`ES6` 还提供了一种声明常量的方式, 使用关键字 `const` 来声明一个常量。
```js
const a = 1; // Number 类型
const b = '2'; // String 类型
const c = [1,2,3]; // Array 类型
```

## 分析 `var`，`let` 和 `const` 有何差异？
### `let` 和 `const` 最主要区别在于 `let` 声明的是变量而 `const` 声明的是常量。

### `var` 和 `let `差异
1. `var` 声明的变量能够在声明语句前被获取，但值为 `undefined`,而 `let` 则遵循变量先声明后使用的准则。
```diff
- console.log(name); // undefined
-  var name = '喵喵';
- console.log(name); // 喵喵
+ console.log(name); // ReferenceError: Cannot access 'name' before initialization
+ let name = '喵喵';
+ console.log(name); // 喵喵 
```
2. `var` 声明的变量作用域范围为函数级，而 `let` 声明的变量作用域范围为代码块级。代码块可以理解为在{ }之内。当然如果是在一个函数或者for循环中，( )和{ }里面也是一起的。**补充：`const` 声明的常量作用域范围也为代码级！**
```diff
-{
-    let a = 1;
-    console.log(a); // 1
-}
- console.log(a); // ReferenceError: a is not defined
+{
+    var a = 1;
+    console.log(a); // 1
+}
+console.log(a); // 1
```
 在此列举一个 `var` 作用域函数级的例子
```js
function put(){
    var a = 1;
}
console.log(a); // a is not defined
```

3. `var` 可以重复声明一个变量，而 `let` 则不可以。
```diff
- var a = 1;
- var a = 2;

+ let a = 1;
+ let a = 2; // Identifier 'a' has already been declared
``` 
