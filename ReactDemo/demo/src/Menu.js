import React,{Component,Fragment} from 'react';
import Item from './Item';




export default class Menu extends Component{
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
                    <input id="Menu" value={this.state.inputValue}  onChange = {this.inputChange.bind(this)}/> 
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                {/* 数据驱动界面，不需要操作DOM */}
                <ul>
                   {
                       this.state.list.map( (item,index)=>{
                            return(
        
                                    <Item 
                                        key = {index+item}
                                        content={item}
                                        index = {index}
                                        list = {this.state.list}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                  
                            ) 
                       })
                   }
                </ul>             
            </Fragment>
        )
    }
    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    addList(e){

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
