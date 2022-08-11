import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosPost, axiosGet, axiosUpdate, axiosDelete } from '../api/axios';
import qs from 'qs';
// import jwt_decode from "jwt-decode";
import axios from "axios";

const url = 'https://uu81.herokuapp.com';

const initialState = { 
    users : [],
    isLoading:false,
    // book:false
}

export const getMyEvents = createAsyncThunk('events', async (payload)=>{
    try {
        const response = await axiosGet.get('/events', payload);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})
export const allUsers = createAsyncThunk('allEvents', async (payload)=>{
    try {
        const response = await axiosGet.get('/users/all', payload);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})

export const singleEvents = createAsyncThunk('singleEvents', async (payload)=>{
    try {
        const response = await axiosGet.get('/events/', payload);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})

export const updateEvents = createAsyncThunk('eventUpdate', async (id,payload)=>{ 
    try {
        const response = await axiosUpdate('/events'+id, payload);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})

export const createEvents = createAsyncThunk('newEvents', async (payload)=>{
    try {
        const response = await axiosGet.get('/bookings/user', payload);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})

export const deleteUsers = createAsyncThunk('delelteEvents', async (id)=>{
    try {
        const response = await axiosDelete('/users/'+id);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})


export const userSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
  extraReducers:{
    [allUsers.pending]: (state)=>{
        state.isLoading = true;
    },
    [allUsers.fulfilled]: (state, action) => {
        console.log('fulfiled', action.payload);
        state.users = action.payload;
        state.isLoading = true;
    },
    [allUsers.rejected]: (state)=>{
        state.isLoading = false;
    },
  }
})

// Action creators are generated for each case reducer function
export const { toggle } = userSlice.actions

export default userSlice.reducer