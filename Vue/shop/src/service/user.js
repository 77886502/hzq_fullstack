import axios from '../utils/axios.js';
export function register(params) {
    return axios.post("/user/register",params);
}
export function login(params) {
    return axios.post("/user/login",params)
}