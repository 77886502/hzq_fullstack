import React,{Component} from 'react';
// 引入 antd组件 样式
import TodoListUI from './TodoListUI';
import store from './store';
import {getTodoList,changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators';
class TodoList extends Component { 
    constructor(props){
        super(props)
        // console.log(store.getState());
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange)
    }
    render() { 
        return (  
            <TodoListUI
                inputValue = {this.state.inputValue}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                list = {this.state.list}
                deleteItem = {this.deleteItem}
            />
        );
    }
    componentDidMount() {
      const action = getTodoList();
      store.dispatch(action);
    }
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = addItemAction();
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
}
 
export default TodoList;