import express from 'express';
import {validaUserData,hashPassword} from './user.middleware';
import * as userController from './user.controller';
const userouter = express.Router();

/*
    创建用户
*/ 
userouter.post('/users',validaUserData,hashPassword,userController.store);

export default userouter;
