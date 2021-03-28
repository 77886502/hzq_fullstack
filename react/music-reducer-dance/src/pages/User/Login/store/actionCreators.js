import { CHANGE_USER_INFO,CHANGE_LOGIN_STATUS } from "./constants";
import { loginByPhoneRequest } from '../../../../api/request';

// data  来自远程API
// 需要写两个action，同步和异步，axios只在action里面写
export const saveUserInfo = data => ({
    type: CHANGE_USER_INFO,
    data
})

export const saveLoginStatus = data => ({
    type: CHANGE_LOGIN_STATUS,
    data
})

export const loginByPhone = (phone, password) => {
    return dispatch => {
        // dispatch(saveUserInfo)
        loginByPhoneRequest(phone, password)
            .then(res => {
                dispatch(saveUserInfo(res));
                console.log(res.data,"============")
                dispatch(saveUserInfo(res.data));
        })
    }
}
