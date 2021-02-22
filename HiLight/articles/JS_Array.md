# 浅谈JS之数组篇

## 数组（Array）
在`C，C++，Java`等等编程语言中，数组是一段线性分配的内存，它通过整数计算偏移来访问其中的元素。然而在JS中，并没有像上述一样的数组，而是提供了一种拥有一些类似上述数组特性的对象。它把数组的下标转换成字符串，用其作为属性，而且数组中可以存放任意类型的值。它明显的比一个真正的数组慢，但它使用起来却更加方便！


## 创建数组
`JavaScript`提供了一些创建数组的方式，我在此列举两种最为常见的方式。
1. 通过 `Array` 构造函数创建数组,其中也有不同的表达形式
- `new Array()`
>如果调用构造函数 `Array()` 时没有使用参数，那么返回的数组为空，`length` 值为0。
```js
    const Arr = new Array(); 
    console.log(Arr); // []
```

- `new Array(size)`
>当调用构造函数 Array() 时只传递给它一个数字参数，该构造函数将返回具有指定个数、元素为 `undefined` 的数组。参数 `size` 是期望的数组元素个数。返回的数组的 `length` 的值将被设为 `size` 的值。
```js
    // 由于 length 属性的值是一个 0 到 2^32 - 1的整数。
    // 所以 size 取值范围 0 到 2^32 - 1
    const arr = new Array(3);
    // 不同的运行环境下，输出的表达形式会有所差异
    console.log(arr); //[ <3 empty items> ] 
```

- `new Array(element0, element1, ..., elementn)`
> 参数 `element1 ..., elementn` 是参数列表。当使用这些参数来调用构造函数 `Array()` 时，新创建的数组的元素就会被初始化为这些值。它的 `length` 字段也会被设置为参数的个数。
```js
    const arr = new Array(1,2,3);
    console.log(arr);// [1, 2, 3]
```
2. 通过数组字面量创建数组
> 数组字面量是在中括号中包含以逗号隔开的元素列表。逗号后面如果没有元素，则数组的 `length` 的值等于逗号的个数，否则数组的 `length` 的值等于逗号个数加上1。
```js
    // 通过数组字面量创建数组不会调用构造函数 Array()
    const empty = []; // length = 0;
    const one = [,]; // length = 1;
    const two1 = [1,2,] // length =2
    const two2 = [,,] // length =2
    const arr = [1,2,3]; // length =3
```

## 数组的 length 属性
每个数组都有一个 `length` 属性，但是与其他大多数编程语言不同是，`JavaScript` 中数组的 `length` 没有上界。如果你用大于或等于当前的数组 `length` 的数字作为下标来存储元素，那么数组会扩大容纳新元素，从而不会发生数组越界的错误。

- length 属性的值是这个数组的最大整数属性名加上1。它不一定等于数组里属性的个数。
```js
var myArray = [];
console.log(myArray.length); // 0
myArray[100] = 100;
console.log(myArray.length); //101
// myArray 数组里只包含一个属性。
```
![](https://raw.githubusercontent.com/77886502/hzq_fullstack/main/HiLight/img/1.png)

[]后置下标运算符把它所含的表达式转换成字符串，如果该表达式有 `toString()` 方法就使用该方法的值。这个字符串将被用做属性名。如果这个字符串看起来大于或等于这个数组当前的 `length` 值且小于2<sup>32</sup>，那么这个数组的 `length` 属性会重新设置为新的下标加1。你也可以直接设置 `length` 的值。设置更大的 `length` 不会给数组分配更多的空间。而把 `length` 值设小会导致下标大于或等于新 `length` 的属性被删除。

```js   
var arr = [1,2,3,4,5,6,7];
arr.length = 5;
console.log(arr); // [1, 2, 3, 4, 5]
arr[7] = 7;
console.log(arr.length); // 8
```
## 数组空位
在使用数组字面量创建数组的时，我们可以使用一串逗号来创建空位。`JavaScript` 中数组空位指的是数组中的 `empty` ，其表示的是在该位置没有任何值。
```js
var arr = [1, , , ,5]; //下标 2,3,4 都是空位 
console.log(arr); // [1, <3 empty items>, 5]
console.log(arr.length); // 5
```
>由于 `ES5` 和 `ES6` 规范的如何处理数组的行为不一致和存在性能隐患，因此在实践中要避免使用数组空位。如果确实需要空位，可以显示地用 `undefined` 值代替。

## 数组索引
要想取得数组中的值，需要使用中括号并提供相应值的进行索引。
```js
var arr = [1,2,3];
console.log(arr[1]); // 2
```
如果访问的索引大于或等于当前的数组 `length` 的值，会返回 `undefined` ;
```js
var arr = [1,2,3];
console.log(arr[3]); // undefined
console.log(arr[4]); // undefined
```
## 数组元素的增删改查的方法
`JavaScript` 提供了一套数组可用的方法，这些方法被封装在数组原型对象 `Array.prototype` 中。在此列举数组原型对象 `Array.prototype` 提供的一些数组元素增删改查的方法,具体更加细致地实现可以参考 [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) 。  
  
1. 增加元素
- `push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
- `unshift()` 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)

2. 删除元素
- `pop()`方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。
- `shift()` 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
- `splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

3. 修改元素
- `copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
- `fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

4. 查找元素
- `includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
- `indexOf()` 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
- `lastIndexOf()` 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
- `find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
- `findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

## 判断一个对象是不是数组
可以采用`Array.isArray()`方法来确定传递的值是否是一个 `Array`。
```js
const arr = [1,2,3];
// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
const set = new Set([1,2,3]);
console.log(Array.isArray(arr)); // true 
console.log(Array.isArray(set)); // flase
```

以上就是个人阅读一些书籍后，对`JavaScript`中的数组的一些总结。如有所获，请点赞！
参考文献：[《JavaScript语言精粹》](https://baike.baidu.com/item/JavaScript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9/4500619?fr=aladdin)，[《JavaScript高级程序设计》](https://baike.baidu.com/item/JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/10576650?fr=aladdin) [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)