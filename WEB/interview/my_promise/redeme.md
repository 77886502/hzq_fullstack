// Promise 题目
const delay = (ms) => new Promise((resolve) => setTimeout(resolve,msg));


1. 递归的高级套路
    数组 length + shift 操作
    run 只要调用这一个API 就可以
    区分 flow 跟普通函数、delay 标志isFlow:true
    slice 
    flat