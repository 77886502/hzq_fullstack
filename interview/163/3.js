// 引用类型
// 存储的元素   基本数据类型 是值 存储地点是栈    引用数据类型 是地址(又名指针) 存储地点是堆

let a1 = 1;
b1 = a1;
b1 = 2;
console.log(a1);

const a = [];
const b = a;
b.push(1);
console.log(a);

function test(person){
    person.age = 26;
    return person;
}
// const只能保证这个指针是固定的
const p1 = {
    name:'yck',
    age: 25
}
const p2 = test(p1);
console.log(p1);
console.log(p2);
p2.name = '66';
console.log('---------')
console.log(p1);
console.log(p2);

