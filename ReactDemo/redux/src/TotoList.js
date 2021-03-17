import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
const data = ['8:00 起床','8:30 早餐','9:00 工作','12:00 午餐']
class TotoList extends Component { 
    render() { 
        return (  
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder="请输入备忘内容" style={{width:'250px',marginRight:'10px'}}/>
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource ={data}
                        renderItem = {item=>(<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
 
export default TotoList;