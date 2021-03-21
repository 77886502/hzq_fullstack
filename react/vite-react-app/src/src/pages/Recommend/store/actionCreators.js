// 与api通信的地方
import { getBannerRequest } from '../../../api/request';

// com useEffect -> action -> api then -> dispatch(action-type)  -> reducer -> 新的值
export const channgeBannerList = (data) => ({
    type: 'CHANGE_BANNER',
    data: data
})
// 异步
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest()
            .then(data => {
                // dispatch 是有格式化
                // 同步
                // console.log(data.data.banners, '||||-----------');
                dispatch(channgeBannerList(data.data.banners))
            })
    }
}