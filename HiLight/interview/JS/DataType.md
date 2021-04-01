# JS数据类型考点

## JS有哪些数据类型，该如何判断

- 简单数据类型又称基本数据类型
    1. number
    2. string
    3. boolean
    4. undefined
    5. null
    6. symbol
    7. bigint   (ES2020引入的 大于 2<sup>52</sup> - 1 的整数)

- 复杂数据类型又称引用类型
    1. Object
    2. Function
    3. Array
    4. Date
    5. RegExp
    6. Math

2. 基本数据类型与引用数据类型的区别
    1. 基本数据类存储在**栈内存**中，被引用或拷贝是，会创建一个完全相等的变量。
    2. 应用数据类型存储在**堆内存**中，存储的是地址，多个引用会指向同一个地址，这里会涉及一个**共享**的概念
    ```js
        let a = {
            name:'Taro',
            age:18
        }
        let b = a;
        console.log(a.age); // 18
        b.age = 20;
        // a 和 b 的引用都指向同一个地址
        console.log(a.age); // 20

    ```


3. 如何判断上述数据类型？

    1. 采用 `typeof` 操作符

        `typeof` 可以正确判断的数据类型有  基本数据类型(除null)、Function，且返回的是 `'type'` 的字符串，其中 `type` 是数据类型。 
        
        `typeof` 原理： 不同的对象在底层都表示为二进制，在Javascript中二进制前（低）三位都为0的话会被判断为 `oject` 类型，（因为二进制中的“前”一般代表低位）。

        - 000: 对象
        - 010: 浮点数
        - 100：字符串
        - 110： 布尔
        - 1： 整数

        null的二进制为全是0，所以typeof才会把nul判断成Object， 而 `Function` 属于 `Object` 子类型，本意为可调用的对象。其内部有个 `[[call]]` 属性，能支持函数被调用。`typeof`通过这个属性来区分 `Function` 和其他 `Object` 类型。

    2. 采用 `instanceof` 操作符

    `instanceof` 可以帮我判断复杂数据类型，但无法判断基础数据类型。
    `instanceof` 原理：检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。
    
    手写一个 instanceof
    ```JS
   function myInstanceof(left,right)
    {
    // instace 首先对于基本数据类型 统统返回 false
    if(typeof left != Object || left == null) 
        return false;
    let p = left.__proto__;
    while(p)
    {
        if(p==right.prototype)
            return true;
        p = p.__proto__;
    }
    return false;
    }
    ```



    3. 采用 `Object.prototype.toString()`
    使用`Object.prototype.toString()`能判断所有数据类型. 返回`'[object type]'`字符串，其中 `type` 是对象的类型。

    原理：对象都包含一个内部属性 [[class]](我们可以把它看做一个内部的分类)。这个属性无法直接访问，一般通过Object.prototype.toString(...)来查看。对于除`Object`以外对象需要通过`call`来调用才能返回正确信息。

    缺陷：低版本的浏览器IE无法完全兼容这个API





    **总结：typeof可以用来判断大部分基本数据类型和 `Function`，instanceof只能用来判断引用数据类型，Object.prototype.toString()可以判断所有数据类型但要注意浏览器的兼容性问题**




## JS数据类型转换    


### 强制类型转换

1. 强制类型转换的方法有 Number()，parseInt()，parseFloat()，toString()，String()，Boolean()
    
    - `Numebr()` 强制转换规则:

        1. `true` 和 `false` 分别转换为 `1` 和 `0` 。

        2. `null` 转换成 `0`

        3. `undefined` 转换成 `NaN`

        4. 如果 `String` 类型只包含数字(或者是0X/0x开头的十六进制数字字符串，允许包含正负号)，那么将其转换成为十进制。如果 `String` 类型只包含有效的浮点格式，那么将其转换成为浮点值。如果 `String` 类型是空字符串，那么将其转换成为 `0` 。如果以上都不满足，均返回`NaN` 。

        5. `Symbol` 抛出错误。

        6. 如果是对象，并且部署了 [Symbol.toPrimitive] ，那么调用此方法，否则调用对象的 valueOf() 方法，然后依据前面的规则转换返回的值；如果转换的结果是 NaN ，则调用对象的 toString() 方法，再次依照前面的顺序转换返回对应的值（Object 转换规则会在下面细讲）。

    - `Boolean()` 强制转换规则:

        这个方法的规则是：除了 `undefined`、 `null`、 `false`、 `''`、 `0`（包括 `+0`，`-0`）、 `NaN` 转换出来是 `false`，其他都是 `true`。

### 隐式数据类型转换

凡是通过逻辑运算符 (&&、 ||、 !)、运算符 (+、-、*、/)、关系操作符 (>、 <、 <= 、>=)、相等运算符 (==) 或者 if/while 条件的操作，如果遇到两个数据类型不一样的情况，都会出现隐式类型转换。这里你需要重点关注一下，因为比较隐蔽，特别容易让人忽视。

下面着重讲解一下日常用得比较多的“==”和“+”这两个符号的隐式转换规则。

  - '==' 的隐式类型转换规则


    1. 如果其中一个操作值是 null 或者 undefined，那么另一个操作符必须为 null 或者 undefined，才会返回 true，否则都返回 false；

    2. 如果其中一个是 Symbol 类型，那么返回 false；

    3. 两个操作值如果为 string 和 number 类型，那么就会将字符串转换为 number；

    4. 如果一个操作值是 boolean，那么转换成 number；`

    5. 如果一个操作值为 object 且另一方为 string、number 或者 symbol，就会把 object 转为原始类型再进行判断（调用 object 的 valueOf/toString 方法进行转换）。
  
  - +' 的隐式类型转换规则

    1. 如果其中有一个是字符串，另外一个是 undefined、null 或布尔型，则调用 toString() 方法进行字符串拼接；如果是纯对象、数组、正则等，则默认调用对象的转换方法会存在优先级（下一讲会专门介绍），然后再进行拼接。

    2. 如果其中有一个是数字，另外一个是 undefined、null、布尔型或数字，则会将其转换成数字进行加法运算，对象的情况还是参考上一条规则。

    3. 如果其中一个是字符串、一个是数字，则按照字符串规则进行拼接。

  - Object 的转换规则

    1. 对象转换的规则，会先调用内置的 [ToPrimitive] 函数，其规则逻辑如下：

    2. 如果部署了 Symbol.toPrimitive 方法，优先调用再返回；

    3. 调用 valueOf()，如果转换为基础类型，则返回；

    4. 调用 toString()，如果转换为基础类型，则返回；

    5. 如果都没有返回基础类型，会报错。










