import {Component} from 'react';
import styles from './index.less';//css in js 
import {Row,Col} from 'antd';
import logo from '@/assets/logo_blue_1024.png';//alias 短路径
import Login from './components/Login/';
const Index=()=>{
    const handSubmit =() =>{

    }
        return (
        <div className={styles.content}>
            <Row>
                <Col span={24} className={styles.logo}>
                    <img src={logo} alt="logo" />
                </Col>
            </Row>
            <h2 className={styles.title}>登录</h2>
            <Login ></Login>
        </div>
    )
}
export default Index
