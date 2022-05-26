import React,{ useEffect } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './app/authSlice';
import Home from './component/Home';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import Layout from './component/Layout';

function App() {
  const {accessToken} = useSelector((state) =>  state.auth);
  const dispatch =  useDispatch();
  
  useEffect(()=>{
    if(accessToken !== undefined){
      dispatch(authActions.logIn());
    }else{
      dispatch(authActions.logOut());
    }
    console.log(accessToken);
  },[accessToken])

  return (
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
        </Route>
    </Routes>
  );
}

export default App;
