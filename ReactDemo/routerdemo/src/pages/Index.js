import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'技术胖的个人博客-1'},
                {cid:234,title:'技术胖的个人博客-2'},
                {cid:345,title:'技术胖的个人博客-3'}
            ]
        }
    }
    render() { 
        return (
            <>
            <h2>主页 Index</h2> 
            <ul>
                {
                    this.state.list.map((item,index) =>{
                        return(
                            <li key={index+item}>
                              <Link to={'/list/'+item.cid}>{item.title}</Link>  
                            </li>
                        )
                    })
                }
            </ul>
            </>
        );
    }
}
 
export default Index;