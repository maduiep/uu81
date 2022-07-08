import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosPost,axiosGet } from '../api/axios';
import qs from 'qs';
// import jwt_decode from "jwt-decode";
import axios from "axios";

const url = 'https://uu81.herokuapp.com';

const initialState = { 
    bookings : [],
    isLoading:false,
    book:false
}

export const getBooking = createAsyncThunk('bookings', async (payload)=>{
    try {
        const response = await axiosGet.get('/bookings/user', payload);
        return response.data;
    } catch (error) {
        return console.log(error);
    }
})
export const bookEvent = createAsyncThunk('book', async (payload)=>{
  try {
    const response = await axiosPost('/bookings/',{
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        data: payload,
    });
    return response.data;
} catch (error) {
    return console.log(error);
}
})


export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
  },
  extraReducers:{
    [getBooking.pending]: (state)=>{
        state.isLoading = true;
    },
    [getBooking.fulfilled]: (state, action) => {
        console.log('fulfiled', action.payload);
        state.bookings = action.payload;
        state.isLoading = true;
    },
    [getBooking.rejected]: (state)=>{
        state.isLoading = false;
    },
    [bookEvent.pending]: (state)=>{
        state.isLoading = true;
    },
    [bookEvent.fulfilled]: (state, action) => {
        console.log('fulfiled', action.payload);
        state.book = true;
    },
    [bookEvent.rejected]: (state)=>{
        state.isLoading = false;
    },
  }
})

// Action creators are generated for each case reducer function
export const { toggle } = bookSlice.actions

export default bookSlice.reducer