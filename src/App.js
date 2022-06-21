/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { refresh } from './app/authSlice';
import Home from './component/Home';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import Layout from './component/Layout';
import DashLayout from './component/layouts/DashLayout'
import DashHome from './component/Dashboard/DashHome';
import Bookings from './component/Dashboard/Bookings/Bookings';
import Payments from './component/Dashboard/Payments';
import Profile from './component/Dashboard/Profile';
// import Event from './component/Event';
import Users from './component/Users/Users';
import User from './component/Users/User';
import SingleEvent from './component/SingleEvent';
import ls from 'localstorage-slim'
import ProtectedRoutes from './ProtectedRoutes';
function App() {
    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector((state)=> state.auth)
    
    ls.config.encrypt = true;
    

    // useEffect(()=>{
            // console.log(ls.get('token').isloggedin);
        //   console.log(ls.get('token').token);
    // },[])

    useEffect(()=>{
        if(ls.get('token') !== null){
    
          const data = ls.get('token');
          
          console.log(data.isloggedin);
          
          if(data.isloggedin){
            dispatch(refresh());
          };
        }
    
        if(isLoggedIn){
          console.log(isLoggedIn);
          <Navigate to='/dashboard'/>
        }
      },[isLoggedIn])
      
    return ( 
        <Routes>
            <Route path = "/" element = { < Layout /> } >
                <Route path = "/" element = { < Home /> }/> 
                <Route path = "/event/:id" element = { < SingleEvent /> } /> 
                <Route path = "register" element = { < Register /> }/> 
                <Route path = "login" element = { < Login /> }/> 
            </Route>

            <Route element = { <ProtectedRoutes/> } > 
                < Route path = 'dashboard' element = { < DashLayout /> }> 
                    < Route path = "/dashboard" element = { < DashHome /> } /> 
                    < Route path = "bookings" element = { < Bookings /> } /> 
                    < Route path = "bookings/:id" element = { < Bookings /> } /> 
                    < Route path = "payments" element = { < Payments /> } /> 
                    < Route path = "profile" element = { < Profile /> } /> 
                    < Route path = "users" element = { < Users /> } /> 
                    < Route path = "users/:id" element = { < User/> }/> 
                </Route > 
            </Route> 
        </Routes>
    );
}

export default App;