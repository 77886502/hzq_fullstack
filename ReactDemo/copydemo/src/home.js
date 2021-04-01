import React from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import Login from './Login';
import {connect} from 'react-redux';

const Home = (props) => {
    let {LogIn} = props
    return(
        <div>
            <Button  onClick={LogIn} type="primary">登录</Button>
            <Login />
        </div>
        
    )
}
const stateToProps = (state)=>{
    return {
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        LogIn(){
            console.log(document.getElementsByClassName("formBox"));
            let Login =  document.getElementsByClassName("formBox")[0];
            Login.setAttribute("d","none");
        }
    }
}

export default connect(stateToProps,dispatchToProps)(Home);
