// 与API 通信的地方
import { getBannerRequest } from '../../../api/request';

// com useEffect -> action -> api then-> dispatch(action-type)-> reducer -> 新的值  
export const channgeBannerList = (data) => ({
  type: 'CHANGE_BANNER',
  data: data
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then(data => {
        // dispatch 是有格式
        dispatch(channgeBannerList(data.banners))
      })
  }
}
