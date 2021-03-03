let a = 0xa; // 这是什么？ 16进制
console.log(typeof a);
var b = 010; //八进制
var c = 0b01; // 二进制
console.log(b);
console.log(c+1);
// 0.3000000000004
// JS浮点数不精确 0.3
// 1. JS没有浮点数 Number new Number() 不适合计算
// 2. 浮点数在转成二进制的时候 它会无限的循环 32位 会舍弃一些位
// 二进制位相加 不精确
console.log(0.1+0.2);
console.log((0.1).toString(2)); // toString 穿进制数
console.log(Number.parseInt('010',8));
console.log(Number.parseInt('100',2)); // 结果是？ NaN
// 跟什么相关？上溢 大数字 BigInt
// JS Number类型只能安全地表达 -90007199254740991(-2^53 - 1)
console.log(9999999999999); //10000000000 ?
console.log(90007199254740992 === 90007199254740993);
console.log(90007199254740992n === 90007199254740993n);
// number + bigint 会报错
console.log(10+10n);