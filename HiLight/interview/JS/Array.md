# 数组面试考点

## JS数组
- 数组的构造器有哪几种？
    
    1. 使用对象字面量创建数组
    ```js
    // 对象字面量创建
    let arr = [1,2,3];
    ``` 
    2. `Array()` 创建数组
    ```js
    // 使用Array 构造器创建
    
    /* 
        new Array(len)，当 len 为数值时，len需要小于 2^32(why? len属性是无符号整型变量)，否则抛出异常
        当 len 不为数值时，返回一个只包含 len 元素一项的数组。
    */
    let arr1 = new Array('str');
    console.log(str); // ['str']

    /* 
        new Array(arg1,arg2,....)，当参数长度为 0 或大于等于 2 时，
        传入的参数会依次成为数组的元素。(参数长度为 0 时，返回空数组)
    */
    let arr2 = new Array(1,2,3);
    ```
    ES6 专门扩展了数组构造器 Array 新增了两个方法 Array.of()(整体用的比较少)，Array.from()(具有灵活性)

    3. `Array.of()`
    ```js
        /*
            Array.of() 与构造器有相似之处，用于将参数依次转换为数组中的元素然后返回这个数组，而不管这个参数是否为数值。
        */
    let arr1 = Array.of(1);
    let arr2 = Array.of('1',[1],true);
    console.log(arr1); // [ 1 ]
    console.log(arr2); // [ '1', [ 1 ], true ]
    ```  
    4. `Array.from()` 
    ```js
    /*
       Array.from(arrayLike[, mapFn[, thisArg]]) 让具有迭代器的对象转换成数组，注意是返回一个新的数组。
       arrayLike 想要转换成数组的对象。String,Set,Map
       mapFn 任选 如果指定了该参数，新副本中的每个元素会执行该一系列函数。 
       thisArg 任选 可选参数，执行某些函数mapFn时this对象。
    */
    let arr1 
    ```
2. 如何判断一个变量为数组？

以下是五种手写的方法：
```js
    let a = [];
    // 1. instanceof
    a instance Array;

    // 2. constructor
    a.constructor === Array; 

    // 3. Object.prototype.isPrototypeOf
    Array.prototype.isPrototypeOf(a);

    // 4. getPrototypeOf
    Object.getPrototypeOf(a) === Array.prototype;
     
    // 5. Object.prototype.toString
    Object.prototype.toString.call(a) === '[onject Array]';
```
ES6 提供了 `Array.isArray()` 方法判断一个变量是否为数组

```js
    // Array.isArray(obj)，obj 要检测的值 如果 obj 是 Array，则为true; 否则为false。
    let arr1 = [1,2,3];
    let arr2 = '123';

    console.log(); 
```

手写一个`Array.isArray()`
```js
function IsArray(obj)
{
    if()
}
```

3. 数组有哪些是改变自身的方法？
    1. `Array.prototype.push()`
        push() 将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

    2. `Array.prototype.pop()`
        pop() 从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。

    3. `Array.prototype.reverse()`
        reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，

    4. `Array.prototype.shift()`
        shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

    5. `Array.prototype.unshift()`
        unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。

    6. `Array.prototype.sort()`
        sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的。由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。

    7. `Array.prototype.splice()`
        splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

    8.  `Array.prototype.copyWithin()` 
    
    9. `fill`

    
    

3. 数组有哪些是不改变自身的方法？
    `Array.prototype.concat` `Array.prototype.` `Array.prototype.` `Array.prototype.` `Array.prototype.` `Array.prototype.`

4. 数组遍历的方法有哪些？
    基于 ES6，不会改变自身的遍历方法一共有 12 个，分别为 forEach、every、some、filter、map、reduce、reduceRight，以及 ES6 新增的方法 entries、find、findIndex、keys、values。

## JS类数组

   - 类数组能否使用数组的方法呢？
   - 类数组有哪些方式可以转换成数组？ 

   1. 函数中的 `arguments`


   2. HTMLCollection


   3. NodeList 


## 数组扁平化



## 数组排序
 - 数据结构中稳定的排序算法有哪些？不稳定算法有哪些？
 - 时间复杂度和空间复杂度分别代表了什么？

    ![](https://s0.lgstatic.com/i/image/M00/94/9D/Ciqc1GAZALGARectAANRfAJPMN8925.png)

    一般要保证算法的时间复杂度在这之间: O(nlog n) > O(n) > O(log n) > O(1);


## Array.prototype.sort()

