const defaultState = {
    inputValue: '写点什么呢',
    list:[
        '8:00 起床',
        '8:30 早餐',
        '9:00 工作',
        '12:00 午餐'
    ]
}
export default (state = defaultState,action) => {
    console.log(state,action);
    // Reducer 只能接受state 不能改变 state 
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'addItem')
    {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'deleteItem')
    {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1);
        return newState
    }
    return state;
};
