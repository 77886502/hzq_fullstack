import axios from 'axios';

export const baseUrl = "http://localhost:3000";

export const axiosInstance = axios.create({
    baseURL:baseUrl
})


