import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ls from 'localstorage-slim';

// import axiosPost from '../api/axios';
// import { axiosPost } from "../api/axios";
import qs from 'qs';
// import Register from './../component/Register';

const url = 'https://uu81.herokuapp.com';

// export const Login = createAsyncThunk('items',async ()=>{
//     return axios(url)
//         .then( (response) => response)
//         .catch( (error) => console.log(error))
// })
const initialState = { 
    items:[],
    isLoggedIn: false,
    isLoading: false,
    accessToken:'',
    accessType:'',
    user:'',
    userRegistered:false
}
export const Login = createAsyncThunk('login',async (payload)=>{
    try {
        const response = await axios({
            baseURL:url,
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: qs.stringify(payload),
                url:'/login',
        });
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})

export const Register = createAsyncThunk('register',async (payload)=>{
    try {
        const response = await axios({
            baseURL:url,
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            // params: payload,
            data: payload,
            // data: qs.stringify(payload),
            url:'/users/',
        });
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        refresh:(state)=>{
            if(ls.get('token').isloggedin){
                state.token = ls.get('token').token
                state.isLoggedIn = true
            }
        },
        logout:(state)=>{
            ls.clear();
            state.token ='';
            state.isLoggedIn = false
        }
    },
    extraReducers:{
        
        [Login.pending]: (state) => {
            state.isLoading = true;
        },
        [Login.fulfilled]: (state, action) => {
            console.log('fulfiled', action.payload.access_token);
            state.isLoading = false;

            state.items = action.payload.data;
            state.accessToken = action.payload.access_token;
            state.accessType = action.payload.token_type;
            state.isLoggedIn = true;

            ls.set('token',{
                isloggedin:state.isLoggedIn,
                token:state.accessToken
            })
            
        },
        [Login.rejected]: (state,action) => {
            state.isLoading = false;
            // console.log(action);
        },
        [Register.pending]: (state) => {
            state.isLoading = true;
        },
        [Register.fulfilled]: (state, action) => {
            console.log('fulfiled', action);
            state.user = action.payload
            state.userRegistered = true
            state.isLoading = false;
        },
        [Register.rejected]: (state,action) => {
            state.isLoading = false;
            state.userRegistered = false
            console.log(action);
        },

    }
})

export const {refresh, logout} = authSlice.actions

export default authSlice.reducer