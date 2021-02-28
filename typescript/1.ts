// 山月老师的面试 ， 每天刷几道
// interface 接口 type自定义类型  ts 的基础
export type User = {
    name: string;
    age: number;
    occupation: string;
}; // 自定义了一个类型 unknown

export const users: User[] = [ // ts 类型的约束， 每个元素，满足
  {
    name: "黄志乾",
    age: 18,
    occupation: "Chimney sweep"
  },
  {
    name: "郑孝龙",
    age: 18,
    occupation: "Astronaut"
  },
];

export function logPerson(user: User) {
    //  很放心,满足User上的定义 
  console.log(`- ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);