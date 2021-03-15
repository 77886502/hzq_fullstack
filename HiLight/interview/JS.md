# JS高频面试考点

## JS有哪些数据类型，该如何判断
- 简单数据类型又称基本数据类型
    1. number
    2. string
    3. boolean
    4. undefined
    5. null
    6. symbol
    7. bigint   ES2020引入的 大于 2<sup>52</sup> - 1 的整数

- 复杂数据类型又称引用类型
    1. Object
    2. Function
    3. Array
    4. Date
    5. RegExp
    6. Math

2. 基本数据类型与引用数据类型的区别
    1. 基本数据类存储在**栈内存**中，被引用或拷贝是，会创建一个完全相等的变量。
    2. 应用数据类型存储在**堆内存**中，c
3. 如何判断上述数据类型？

    1. 采用 `typeof` 操作符

        `typeof` 可以正确判断的数据类型有  基本数据类型(除null)，Function 
        
        `typeof` 原理： 不同的对象在底层都表示为二进制，在Javascript中二进制前（低）三位存储其类型信息（因为二进制中的“前”一般代表低位）。
        - 000: 对象
        - 010: 浮点数
        - 100：字符串
        - 110： 布尔
        - 1： 整数
        null的二进制为全是0，所以typeof才会把nul判断成Object， 而 `Function` 属于 `Object` 子类型，本意为可调用的对象。其内部有个 `[[call]]` 属性，能支持函数被调用。

    2. 采用instanceof判断复杂数据类型，但无法判断基础数据类型







    3. 采用Object.prototype.toString()
    使用

    缺陷：低版本的浏览器IE无法完全兼容这个API





    **总结：typeof可以用来判断大部分基本数据类型，instanceof用来判断引用数据类型，Object.prototype.toString()可以判断所有数据类型但要注意浏览器的兼容性问题**




## JS数据类型转换    


### 强制类型转换

1. 强制类型转换的方法有 Number()，parseInt()，parseFloat()，toString()，String()，Boolean()
    
    - `Numebr()` 强制转换规则:
        1. `true` 和 `false` 分别转换为 `1` 和 `0` 。
        2. `null` 转换成 `0`
        3. `undefined` 转换成 `NaN`
        4. 如果 `String` 类型只包含数字，那么将其转换成为十进制。如果 `String` 类型只包含有效的浮点格式，那么将其转换成为浮点值。如果 `String` 类型是空字符串，那么将其转换成为 `0` 。如果以上都不满足，均返回`NaN` 。
        5. `Symbol` 抛出错误。

### 隐式数据类型转换












