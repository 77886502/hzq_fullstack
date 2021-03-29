const defaultState = {
    inputValue:"",
    list:['吃饭','睡觉']
}
export default (state = defaultState,action)=>{
    if(action.type === 'inputChange')
    {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }
    if(action.type === 'addItem')
    {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === 'deleteItem')
    {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state
}