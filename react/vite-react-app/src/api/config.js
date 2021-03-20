// ajax 请求的封装
import axios from 'axios';
// 完成api的引入 
// 设置统一地址前缀
export const baseUrl = 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL:baseUrl
})

export {
    axiosInstance
}