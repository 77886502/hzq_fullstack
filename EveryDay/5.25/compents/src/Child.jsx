import React,{Component} from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    shouldComponentUpdate(nextProps,nextState){
        return this.props.son != nextProps.son
    }
    render() { 
        console.log('Child Compent render')
        return (  
            <div>
                这是Child子组件
                <p>{this.props.son}</p>
            </div>
        );
    }
} 
export default Child;