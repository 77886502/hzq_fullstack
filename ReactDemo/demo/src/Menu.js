import React,{Component,Fragment} from 'react';
import Item from './Item';
import Boss from './Boss';
import './Boss.css';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
export default class Menu extends Component{
    //生命周期函数 在某一时刻，可以自动执行的函数
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            list:[`洗头`,`洗脚`,`洗澡`]
        }
    }
    render(){
        return(
            // 外层包裹的div 会影响flex布局
            <Fragment>
                <div> 
                    {/* 指定事件后，要使用bind方法绑定指针 */}
                    <label htmlFor = "Menu">增加服务：</label>
                    <input 
                        id="Menu" 
                        value={this.state.inputValue}  
                        onChange = {this.inputChange.bind(this)}
                        ref = {(input) => {this.input = input}}
                    /> 
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                {/* 数据驱动界面，不需要操作DOM */}
                <ul ref={(ul)=>{this.ul = ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map( (item,index)=>{
                                return(
                                    <CSSTransition
                                        timeout = {2000}
                                        classNames ='boss-text'
                                        unmountOnExit
                                        appear = {true}
                                        key = {index+item}
                                      
                                    >

                                        <Item 
                                            key = {index+item}
                                            content={item}
                                            index = {index}
                                            list = {this.state.list}
                                            deleteItem={this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>                                       
                                ) 
                            })
                        }
                    </TransitionGroup>                  
                </ul> 
                <Boss/>            
            </Fragment>
        )
    }
    inputChange(){
        this.setState({
            inputValue: this.input.value
        })
    }
    addList(e){
        // 虚拟DOM渲染需要时间,异setState步处理
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
        
    }
    deleteItem(index){
        console.log(index);
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
}
