import {Request,Response,NextFunction} from 'express';
import * as userService from './user.service';
import bcrypt from 'bcrypt';
export const hashPassword = async (
    request:Request,
    response:Response,
    next:NextFunction
) => {
    const {password} = request.body;
    request.body.password = await bcrypt.hash(password,10);
    next();
}
/*
    验证用户数据
*/ 
export const validaUserData = async(
    request:Request,
    response:Response,
    next:NextFunction
) => {
    /*
        1. 验证数据是否合法？
        1.1 用户名为空
        1.2 密码为空
        1.3 用户是否重名
    */
    console.log('验证数据是否合法');
    const {name,password} = request.body;
    // console.log(name,password);
    /*
        如果用户名为空，交给处理为空的错误处理函数去做
    */ 
    if(!name){
        next(new Error('NAME_IS_REQUIRED'))
    }
    if(!password){
        next(new Error('PASSWORD_IS_REQUIRED'))
    }
    // 验证用户是否存在 service
    const user = await userService.getUserByName(name);
    if(user) return next(new Error('USER_ALREADY_EXIST'));

    next();
}