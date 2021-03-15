import React, { Component } from 'react';
// 校验数据需引入
import PropTypes from 'prop-types';
class Item extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    // 组件第一次存在于DOM中，函数是不会被执行的
    // 如果发生变化，且已将存在DOM中，函数才会被执行
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }
    componentWillUnmount()
    {
        console.log('componentWillUnmount----组件删除时执行');
    }

    render() { 
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