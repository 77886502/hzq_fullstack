// [] Object Array [] ![]
// 直观上是矛盾的 类型转换 隐式只有三种 数值 字符串 布尔值
// 什么东西触发类型转换的？ ==
// [] => false Boolean
// console.log([] == ![]); // true
console.log(Number([]));
// ![] 优先级高 转成布尔值
console.log(![]);
console.log(Number(![]));
console.log(Boolean([]) == Boolean(![])); // 显示类型转换 数字 0 