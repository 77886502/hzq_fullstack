# var，let 和 const
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

分析 `var`，`let` 和 `const` 有何区别？
`let` 和 `const` 最主要区别在于 `let`声明的是变量而`const`声明的是常量。
