// 数据是要类型化的，
export type User = {
    name: string;
    age: number;
    occupation?: string;
    role?:string
};
interface Admin { // 接口
    name:string;
    age:number;
    role:string;
}
export type Person = User | Admin ; // 普通用户或管理员
// 用户表里有的用户是role管理员
export const users: unknown[] = [ // ts 类型的约束， 每个元素，满足
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
    {
        name: "徐蕊",
        age: 18,
        role: "Administrator"
    },
    {
        name: "廖辉",
        age: 18,
        role: "主任"
    },
  ];
export function logoPerson(user:Person){
    console.log(`-${user.name},${user.age}`);
    let additionalInformation:string;
    // ? 类型推导
    if((<Admin>user).role){
        additionalInformation = (<Admin>user).role;
    }
    else{
        additionalInformation = (<User>user).occupation;
    }
    console.log(`${user.name}`)
}