import axios from "axios";
// import { useSelector } from "react-redux";
import ls from 'localstorage-slim';

const BASE_URL = 'https://uu81.herokuapp.com';


export const axiosGet  = axios.create({
    baseURL : BASE_URL,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: false,
});

export const axiosPost  = axios.create({
    method: 'POST',
    baseURL : BASE_URL,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 10000, // Request timeout
});


axiosGet.interceptors.request.use(
    
    config => {
        const accessToken = ls.get('token').token
        config.headers.common['Authorization'] = 'Bearer ' + accessToken;
        return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// res