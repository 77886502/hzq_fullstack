// pop 方法从一个数组中删除并返回最后一个元素。
// pop 方法有意具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。
// pop方法根据 length 属性来确定最后一个元素的位置。
// 如果不包含length属性或length属性不能被转成一个数值，会将length置为0，并返回undefined。
// 如果你在一个空数组上调用 pop()，它返回  undefined。