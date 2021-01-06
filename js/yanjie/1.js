let ran_num = Math.random(0,9);
console.log(ran_num);
console.log(Math.floor(2.3));
console.log(Math.ceil(7.1));
console.log(Math.round(25.5));
// 0-9之间整数随机 Math.random() 范围0-1之间的小数 
let num = Math.floor(Math.random()*10);
console.log(num);
let max=100, min=0;
// 在最大值和最小值之间的随机数
console.log(Math.floor(Math.random()*(max-min))+min);