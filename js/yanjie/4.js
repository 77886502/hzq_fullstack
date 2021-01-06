// es6提供的新的数据结构
// 1.为了数组的优化而来
// Set Map 两种数据结构 存放特定的数据集合的
const people = new Set(); // []
people.add('黄伦');
people.add('廖辉');
people.add('过宇谭');
people.add('黄伦');
people.add('明平贵');
for (const person of people) {
    console.log(person);
}
// console.log(people);
const students = new Set(['王殿虎','谢文航','夏原骏']);
students.add('支恩泽');
