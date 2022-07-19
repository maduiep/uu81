import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosPost, axiosGet, axiosUpdate, axiosDelete } from '../api/axios';
import qs from 'qs';
// import jwt_decode from "jwt-decode";
import axios from "axios";

const url = 'https://uu81.herokuapp.com';

const initialState = { 
    events : [],
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
export const allEvents = createAsyncThunk('allEvents', async (payload)=>{
    try {
        const response = await axiosGet.get('/events/all', payload);
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
        const response = await axiosUpdate('/events/' + id, payload);
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

export const deleteEvents = createAsyncThunk('delelteEvents', async (id)=>{
    try {
        const response = await axiosDelete('/events/'+id);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})


export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
  extraReducers:{
    [allEvents.pending]: (state)=>{
        state.isLoading = true;
    },
    [allEvents.fulfilled]: (state, action) => {
        console.log('fulfiled', action.payload);
        state.events = action.payload;
        state.isLoading = true;
    },
    [allEvents.rejected]: (state)=>{
        state.isLoading = false;
    },
    [updateEvents.pending]: (state)=>{
        state.isLoading = true;
    },
    [updateEvents.fulfilled]: (state, action) => {
        console.log('fulfiled', action.payload);
        // state.events = action.payload;
        // state.isLoading = true;
    },
    [updateEvents.rejected]: (state)=>{
        state.isLoading = false;
    },
  }
})

// Action creators are generated for each case reducer function
export const { toggle } = eventSlice.actions

export default eventSlice.reducer