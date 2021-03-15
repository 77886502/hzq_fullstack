import React,{Component,Fragment} from 'react';
import Item from './Item';




export default class Menu extends Component{
    //生命周期函数 在某一时刻，可以自动执行的函数
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            list:[`洗头`,`洗脚`,`洗澡`]
        }
    }
    componentWillMount(){
        console.log('componentWillMount------组件将要挂载到页面的时刻');
    }
    componentDidMount() {
        console.log('componentDidMount-----组件挂载完成的时刻')
    }
    shouldComponentUpdate() {
        console.log('组件更新前----shouldComponentUpdate')
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }


    render(){
        console.log('render-------挂载中');
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
        },()=>{
            console.log(this.ul.querySelectorAll('li').length);
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
