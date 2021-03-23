import React,{Component} from 'react';
// 引入 antd组件 样式
import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';
import store from './store';

class TodoList extends Component { 
    constructor(props){
        super(props)
        // console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
    }
    render() { 
        return (  
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{width:'250px',marginRight:'10px'}}
                        onChange = {this.changeInputValue}
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource ={this.state.list}
                        renderItem = {item=>(<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
    changeInputValue(e){
        console.log(e.target.value);
    }
}
 
export default TodoList;