import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import axiosPost from '../api/axios';
import { axiosPost } from "../api/axios";
import qs from 'qs';
// import Register from './../component/Register';

const url = 'https://course-api.com/react-useReducer-cart-project';

// export const Login = createAsyncThunk('items',async ()=>{
//     return axios(url)
//         .then( (response) => response)
//         .catch( (error) => console.log(error))
// })

export const Login = createAsyncThunk('login',async (payload)=>{
    try {
        const response = await axios({
            baseURL:'https://uu81.herokuapp.com',
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
            baseURL:'https://uu81.herokuapp.com',
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                // params: payload,
                data: qs.stringify(payload),
                url:'/login',
        });
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})

export const authSlice = createSlice({
    name:'auth',
    initialState: { 
        items:[],
        isLoggedIn: false,
        isLoading: false,
        accessToken:'',
        accessType:'',
    },
    reducers:{
        logIn(state){
            state.isLoggedIn = true
        },
        logOut(state){
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
            if(state.accessToken !== ''){
                state.isLoggedIn = true;
            }
        },
        [Login.rejected]: (state,action) => {
            state.isLoading = false;
            console.log(action);
        },
        // [Register.pending]: (state) => {
        //     state.isLoading = true;
        // },
        // [Register.fulfilled]: (state, action) => {
        //     console.log('fulfiled', action);
        //     state.isLoading = false;
        // },
        // [Register.rejected]: (state,action) => {
        //     state.isLoading = false;
        //     console.log(action);
        // },

    }
})

export const authActions = authSlice.actions

export default authSlice.reducer