import React,{Component,Fragment} from 'react';

class Menu extends Component{
    render(){
        return(
            // 外层包裹的div 会影响flex布局
            <Fragment>
                <input type="text"/> <button>增加服务</button>
                <ul>
                    <li>洗澡</li>
                    <li>按摩</li>
                    <li>洗脚</li>
                </ul>
            </Fragment>
        )
    }
}
export default Menu;