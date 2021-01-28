import React,{Component} from 'react';
import './CommentList.css';
import Comment from './Comment'
export default class CommentList extends Component {
    render(){
        return(
            <div>
                CommentList
                <Comment/>
            </div>
        )
    }
}