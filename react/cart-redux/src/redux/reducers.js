// 状态树的一个分支，一个状态数据
import { combineReducers } from 'redux'
import * as types from './action-types'
// 商品模块
const goods =  (state = [],action) => {
    const {type,payload} = action
    switch(type){
        case type.DECREMENT_INVENTORY:
            return state.map(good => {
                return good.id === payload.id && good.inventory > 0 
                ? {...good,inventory:good.inventory--}
                :good

            })
        case type.CLEAN_SHOPCART:
            let sessionGood = JSON.parse(sessionStorage.getItem('goods'));
            for(let i=0; i<sessionGood.length;i++){
                let item = sessionGood[i]
                let index = state.findIndex((value)=>item.id == value.id)
                state[index].inventory += item.count;
            }
            return state

        case type.ADD_GOODS:
            // 返回新的状态 payload [...]
            return [...state,...payload]
        default:
            return state
    }
}
// 购物车模块
const shopCart = (state = [],action) =>{
    const {type,payload} = action;
    switch(type){
        case type.ADD_SHOPCART:
            // 
          return
        default:
            return state
    }
}
export default combineReducers({
    goods,
    shopCart
})