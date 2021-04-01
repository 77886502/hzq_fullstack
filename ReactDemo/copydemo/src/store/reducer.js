const defaultState = {
    logIn:false
};
export default (state = defaultState,action) => {
    // Reducer里只能接受state,不能直接改变state
    if(action.type === 'setInputValue')
    {
        // 借助一个新的变量
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'setList')
    {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'deleteItem')
    {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1);
        return newState
    }
    if(action.type === 'bgChange')
    {
        let newState = JSON.parse(JSON.stringify(state))
        newState.skin = action.skin;
        return newState
    }
    if(action.type === 'LogIn')
    {
        let newState = JSON.parse(JSON.stringify(state))
        newState.logIn = true;
        return newState
    }
    if(action.type === 'Close')
    {
        let newState = JSON.parse(JSON.stringify(state))
        newState.logIn = false;
        return newState
    }
    
    return state;
}