import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import loadingReducer from './loader';
import authReducer from './authSlice';
import bookingReducer from './bookingSlice';
import eventReducer from './eventSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    loading: loadingReducer,
    auth: authReducer,
    book: bookingReducer,
    event: eventReducer,
    user: userReducer
  },
});
