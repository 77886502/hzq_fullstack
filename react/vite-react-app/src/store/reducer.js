// 首页、singers、排行榜
// 模块化构建
import { combineReducers } from 'redux';
import {reducer as recommendReducer} from '../pages/Recommend/store';
export default combineReducers({
    recommend: recommendReducer
    // recommend:,
    // singers:,
    // runk:,
})