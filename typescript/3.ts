//interface 接口 设计模式 面向接口的编程
// 满足一个接口 接口来定义方法和属性
interface IUser {
    name: string;
    age: number;
}
const getUesrInfoWithInterface = (user:IUser):string => {
    return `${user.name},age:${user.age}`;}
getUesrInfoWithInterface({name:'koala',age:18});