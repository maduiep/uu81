import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import loadingReducer from './loader';
import authReducer from './authSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    loading: loadingReducer,
    auth: authReducer
  },
});
