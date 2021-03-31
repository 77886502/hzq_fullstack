import React from 'react';
import {Button,Form,Input} from 'antd';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import './Login.css';
const Login = () => {
    return (

            <div className="fromBox">
                <div>
                    <img className="panda" src="https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/normal.0447fe9.png"/>
                </div>
                <div style={{display:"flex"}}> 
                    <div className="word">账密登陆</div>
                    <div>
                        <svg className="icon">
                        <use xlinkHref="#iconguanbi"></use>
                        </svg>
                    </div>
                </div>
                <Form style={{margintop:"-100px"}} className="Box">
                    <Input className="user" placeholder="请输入用户名"/>
                    <Input className="user" placeholder="请输入密码"/>
                    <Button className="btn" type="primary">登陆</Button>
                </Form>
                <div className="leftclickable">注册用户</div> 
                <div className="rightclickable">忘记密码</div>
                <div className="agreement">注册登录即表示同意用户协议、 隐私政策</div>
            </div>
    )
}
export default Login;