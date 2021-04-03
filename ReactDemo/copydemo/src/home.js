import React from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import Login from './Login';
import {connect} from 'react-redux';
import './home.css';

const Home = (props) => {
    let {login,LogIn} = props;
    return(
        <>
        <Button  onClick={LogIn.bind(this,login)} type="primary">登录</Button>
         <div className={login?"mask":"hideBox"}>
                <Login />
        </div>
        </>  
    )
}
const stateToProps = (state)=>{
    return {
        login:state.logIn
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        LogIn(login){
            console.log(login)
            let action = {
               type:'LogIn'
            }
           dispatch(action);
        }
    }
}

export default connect(stateToProps,dispatchToProps)(Home);
