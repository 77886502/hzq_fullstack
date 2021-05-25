import { type } from "os";
type IUserInfoFunc = (user) => string
interface IUser {
    name:string;
    age:number
}
const getUserInfoWithType:IUserInfoFunc = (user) => {
    return `name:${user.name},age:${user.age}`;    
}

getUesrInfoWithInterface({name:"koala",age:18});