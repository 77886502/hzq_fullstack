import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST} from './actionTypes';
import axios from 'axios';
export const changeInputAction = (value) => ({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type:ADD_ITEM
})
export const deleteItemAction = (index) => ({
    type:DELETE_ITEM,
    index
})
export const getListAction = (data) => ({
    type:GET_LIST,
    data
})
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.fastmock.site/mock/9d8a4417111403ffc313d9b06e59e31c/demo/api/user')
        .then((res)=>{
            const data = res.data.data;
            const action = getListAction(data);
            dispatch(action);
        })
    }   
}