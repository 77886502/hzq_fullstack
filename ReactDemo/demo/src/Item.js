import React, { Component } from 'react';
// 校验数据需引入
import PropTypes from 'prop-types';
class Item extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    // 组件优化 判断子组件状态是否发生改变，不改变无需再次渲染！
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.content!==this.props.content)
            return true;
        else
            return false;
    }
    render() { 
        console.log('child-render');
        return ( 
            <li onClick={this.handleClick}>
            {this.props.avname}为你服务——{this.props.content}
            </li> 
        );
    }
    handleClick()
    {
        this.props.deleteItem(this.props.index);
    }
}
// 需要对父组件传入值的数据类型进行校验，以防出错
Item.propTypes = {
    avname:PropTypes.string,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
// 如果未传入用默认值
Item.defaultProps={
    avname:'松岛枫'
}
export default Item;