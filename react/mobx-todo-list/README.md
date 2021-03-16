# React 实战

React 全家桶 前端

react + koa + 全栈

定时应用

setInterval JS ES5
-> 
react state setState data  响应式
redux mobx

state -> 可以被观察的对象 Observerable
发生改变，界面更新  单向绑定  组件内的表达 自身的状态 -> 响应式
数据 放在父组件 传递给子组件

如果是没有关系的组件 如果要共享数据和状态怎么办？redux提供解决的方法

1. 专业的数据管理 redux mobx
2. 正规的流程 绝对不会出问题，一套手续

action applyTravel(2000)
reducer ->  纯函数 经过action后给出一个新的状态


store 中央仓库  
组件数据的 local -> 中央
new Store   做公司 请了个财务
申请一下    10万 用于旅游
部门A 部门B 


# mbox 更简单的数据流管理
1. observerable 观察(组件)与被观察(有状态的实例)
2. Store Provider
    从Store 里去接 redux connect modx @inject
    HOC
    {store} => { // @inject
    this.props.store
    return () => {
        store.todos
    }
    }