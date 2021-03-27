import {fromJS} from 'immutable';
const defaultState = fromJS({
    userInfo:{},
    loginStatus:false
})

export default (state=defaultState,action) =>{
    switch(action){
        default:
            return state;
    }
}