import {combineReducers} from 'redux-immutable';//不可变的状态
import {reducer as userReducer} from '../pages/User/Login/store';
//import {reducer as rankReducer} from '../pages/User/Rank/store';
export default combineReducers({
    user:userReducer,
    //rank:rankReducer
})