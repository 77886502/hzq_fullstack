import React, { Component } from 'react';
class LifeCyle extends Component {
    static defaultProps = {
        name:"计数器"
    }
    constructor(props) {
        super(props);
        this.state = {
            number:0,
            users:[]
        }
        console.log("1. constructor 初始化 props and state")
    }
    componentWillMount() {
        console.log("2. componentWillMount")
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.number === nextState.number)
            return false;
        else
            return true;
    }
    render() { 
        console.log("3. render");
        return (  
            <div>
                <p>{this.props.name}: {this.state.number}</p>
                <button onClick={this.add.bind(this)}>+</button>
                <SubCounter number={this.state.number}/>
            </div>
        );
    }
    componentDidMount() {
        console.log("4. componentDidMount")
    }
    add = () => {
        this.setState({ number: this.state.number});
    };
}
 
export default LifeCyle;

class SubCounter extends Component {
    constructor(props) {
      super(props);
    }
    componentWillReceiveProps() {
      console.log('SubCounter 1.componentWillReceiveProps');
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('SubCounter', nextProps, nextState)
      if (nextProps.number % 2 === 0) {
        return true
      } else {
        return false
      }
    }
    componentWillUpdate() {
      console.log('SubCounter组件即将更新')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("SubCounter组件更新完毕")
    }
    componentWillUnmount() {
        console.log("SubCounter组件卸载");
    }
    render(){
        console.log("SubCounter组件渲染.....")
        // console.log(this.props);
        return(
            <div>
                Hello,
                {this.props.number}
            </div>
        )
    }
    
  }
  