import {createStore} from 'redux'; //  引入createStore方法
import reducer from './reducer';
const store =  createStore(reducer,
    // 创建数据存储仓库
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
export default store;