import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// 让一个状态可以被观察
import {makeAutoObservable} from 'mobx'; // 1
import {observer} from 'mobx-react'; // 2 观察者

// TimerView 2  Store 1
// Store 
class Timer{
  secondsPassed = 0
  constructor(){
    makeAutoObservable(this);

  }
  increase(){
    this.secondsPassed +=1
  }
  reset(){
    this.secondsPassed = 0
  }
}
 
const myTimer = new Timer(); // 实例
// 观察状态的组件
const TimerView = observer(({timer})=>(
  <button onClick={()=> timer.reset()}>secondsPassed:{timer.secondsPassed}</button>
));

setInterval(()=>{
  myTimer.increase();
},1000)
//  根上套上 分开 组件就被去除状态 组件不能再自主管理状态
// 状态要提升
//new Stroe {
// seconds -> 去到组件中 StorageEvent.seconds
// oberverable
//}
// secondsPassed = 0
// action increase reset
ReactDOM.render(<TimerView timer={myTimer}/>,document.body); 
