import { axiosInstance } from './config';
// 所有请求在这统一管理
// banner页
export const getBannerRequest = () => {
    return axiosInstance.get('/banner')
}

// 日推
export const getRecommendListQuest = () => {
    return axiosInstance.get('/personalized')
}

// singers
// export const getSingerListRequest = () => {
//     return axiosInstance.get('/')
// }