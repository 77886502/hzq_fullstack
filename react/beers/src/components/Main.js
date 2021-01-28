import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Item from './Item';
import Loader from './Loader';
import List from './List';
export default class Main extends Component {
    render(){
        return (
            <div>
              {/* 首页 组件化 */}
                <Header />
                <Loader/>
                <List/>
                <Item/>
            </div>
        )
   }
}