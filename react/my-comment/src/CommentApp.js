import React,{Component} from 'react';
import './CommentApp.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList'
export default class CommentApp extends Component {
    constructor(){
        super();    //把Component 基类(父类) 它的构造函数执行一下
        this.state ={
            comments: []
        }
    }
    render(){
        return( //wxml JSX
            <div>
                CommentApp
                <CommentInput/>
                <CommentList/>
            </div>
        )
    }
}