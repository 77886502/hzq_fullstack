# JS Array详解

## 数组（Array）
在C，C++，Java等等编程语言中，数组是一段线性分配的内存，它通过整数计算偏移来访问其中的元素。然而在JS中，并没有像上述一样的数组，而是提供了一种拥有一些类似上述数组特性的对象。它把数组的下标转换成字符串，用其作为属性。它明显的比一个真正的数组慢，但它使用起来却更加方便！


## 创建数组
JS提供了一些创建数组的方式，我在此列举一些比较常见的方式。
1. 通过Array构造函数创建数组,其中也有不同的表达形式
- new Array()，new Array(size)
>如果调用构造函数 Array() 时没有使用参数，那么返回的数组为空，length 值为0。
```js
    const Arr = new Array(); 
```

- new Array(size)
>当调用构造函数 Array() 时只传递给它一个数字参数，该构造函数将返回具有指定个数、元素为 undefined 的数组。参数size是期望的数组元素个数。返回的数组的 length 的值将被设为 size 的值。
```js
    // 由于 length 属性的值是一个 0 到 2^32 - 1的整数。
    // 所以 size 取值范围 0 到 2^32 - 1
    const arr = new Array(3);
    // 不同的运行环境下，输出的表达形式会有所差异
    console.log(arr); //[ <3 empty items> ] 
```

- new Array(element0, element1, ..., elementn);
> 参数 element1 ..., elementn 是参数列表。当使用这些参数来调用构造函数 Array() 时，新创建的数组的元素就会被初始化为这些值。它的 length 字段也会被设置为参数的个数。
```js
    const arr = new Array(1,2,3);
    console.log(arr);// [1, 2, 3]
```
2. 通过数组字面量创建数组
> 数组字面量是在中括号中包含以逗号隔开的元素列表。逗号后面如果没有元素，则数组的 length 的值等于逗号的个数，否则数组的 length 的值等于逗号个数加上1。
```js
    // 通过数组字面量创建数组不会调用构造函数 Array()
    const empty = []; // length = 0;
    const one = [,]; // length = 1;
    const two1 = [1,2,] // length =2
    const two2 = [,,] // length =2
    const arr = [1,2,3]; // length =3
```

## 数组的length属性
每个数组都有一个length属性，但是与其他大多数编程语言不同是，JS中数组的length没有上界。如果你用大于或等于当前的数组length的数字作为下标来存储元素，那么数组会扩大容纳新元素，从而不会发生数组越界的错误。

length属性的值是这个数组的最大整数属性名加上1。它不一定等于数组里属性的个数。
```js
var myArray = [];
console.log(myArray.length); // 0
myArray[100] = true;
console.log(myArray.length); //101
// myArray 数组里只包含一个属性。
```

















参考文献：《JavaScript语言精粹》《JavaScript高级程序设计》