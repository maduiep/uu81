import axios from "axios";
// import { useSelector } from "react-redux";
import ls from 'localstorage-slim';

const BASE_URL = 'https://uu81.herokuapp.com';


export const axiosGet  = axios.create({
    baseURL : BASE_URL,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: false,
});

export const axiosPost  = axios.create({
    method: 'POST',
    baseURL : BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
    },
    // timeout: 10000, // Request timeout
});

export const axiosUpdate  = axios.create({
    method: 'PUT',
    baseURL : BASE_URL,
    headers: {
        'accept' : 'application/json',
        'Content-Type' : 'multipart/form-data',
    },
    // withCredentials: false,
    timeout: 10000, // Request timeout
});

export const axiosDelete  = axios.create({
    method:'DELETE',
    baseURL : BASE_URL,
    headers: {
        'accept': '/',
    },
    timeout: 10000, // Request timeout
});


axiosGet.interceptors.request.use(
    
    config => {
        if(ls.get('token')){
            const accessToken = ls.get('token').token    
            config.headers.common['Authorization'] = 'Bearer ' + accessToken;
        } else {
            if(ls.get('reset')){
                config.headers.common['Authorization'] = 'Bearer ' + ls.get('reset').token
            }
        }
        return config;
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);

axiosUpdate.interceptors.request.use(
    
    config => {
        if(ls.get('token')){
            const accessToken = ls.get('token').token    
            config.headers.common['Authorization'] = 'Bearer ' + accessToken;
        }
        return config;
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
    }
);
    
axiosPost.interceptors.request.use(
        
        config => {
            if(ls.get('token')){
                const accessToken = ls.get('token').token    
                config.headers.common['Authorization'] = 'Bearer ' + accessToken;
            }
            return config;
      },
      error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
      }
);

axiosDelete.interceptors.request.use(
        
        config => {
            if(ls.get('token')){
                const accessToken = ls.get('token').token    
                config.headers.common['Authorization'] = 'Bearer ' + accessToken;
            }
            return config;
      },
      error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error);
      }
);

    // res