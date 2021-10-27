import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://finbank-backend.herokuapp.com/api"
})