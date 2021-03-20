import {axiosInstance} from './config';
// 所有的请求都在这里统一管理
// axios
// url 改了怎么办？
export const getBannerRequest = () => {
    return axiosInstance.get('/banner')
} 
// export const getRecommendList = () => {
//     return axiosInstance.get('/banner')
// } 