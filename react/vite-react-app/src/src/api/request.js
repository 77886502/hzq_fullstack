import { axiosInstance } from './config';
// 所有的请求都在这里统一管理
// axios
// 请求的url改变了怎么办?
export const getBannerRequest = () => {
    return axiosInstance.get('/banner');
}

export const getRecommendListQuest = () => {
    return axiosInstance.get('/personalized');
}
// singers 
// export const getSingleListRequest = () => {
//     return axiosInstance.get('/')
// }