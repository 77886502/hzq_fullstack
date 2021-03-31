import React, { Component } from 'react';
import {Input,Button,List} from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import './TodoList.css';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state=store.getState();
        this.setInputValue = this.setInputValue.bind(this);
        this.setList = this.setList.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.bgChange = this.bgChange.bind(this);
        // 发布订阅模式，实时更新数据
        store.subscribe(this.storeChange);
    }
    render() { 
        return (
            <div className={this.state.skin?'mask':''}>
            <div className={this.state.skin?'.selectMask_box':''} style ={{margin:'20px'}}>
                <Input 
                placeholder= {'写点什么吧'}
                onChange={this.setInputValue}  
                style={{width:'250px',marginRight:'5px'}}
                value={this.state.inputValue}
                />
                <Button onClick={this.setList}  type="primary">增加</Button>
                <Button onClick={this.bgChange}>换肤</Button>
            </div>
            <div>
                <List
                    style={{width:'320px',marginLeft:"20px",backgroundColor:'white'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem = {(item,index) => (
                        <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>
                    )}
                />
            </div>
            </div>
        );
    }
    storeChange(){
        this.setState(store.getState());
    }
    setInputValue(e){
        const action = {
            type:'setInputValue',
            value: e.target.value
        }
        store.dispatch(action);
    }
    setList(){
       const action = {
           type:'setList'
       }
       store.dispatch(action);
    }
    deleteItem(index){
        const action = {
            type:'deleteItem',
            value:index
        }
        store.dispatch(action);
    }
    bgChange(){
        console.log(this.state.skin);
        const action = {
            type:'bgChange',
            skin:!this.state.skin
        }
        store.dispatch(action);
    }
}
 
export default TodoList;