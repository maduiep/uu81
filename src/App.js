/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { refresh } from './app/authSlice';
import Home from './component/Home';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import ForgetPassword from './component/Auth/forget-password';

import Layout from './component/Layout';
import DashLayout from './component/layouts/DashLayout'

import DashHome from './component/Dashboard/DashHome';
import Bookings from './component/Dashboard/Bookings/Bookings';
import Payments from './component/Dashboard/Payments';
import Profile from './component/Dashboard/Profile';
import ChangePwd from './component/Dashboard/ChangePwd';

// import Event from './component/Event';
import SingleEvent from './component/SingleEvent';
import ls from 'localstorage-slim'
import ProtectedRoutes from './ProtectedRoutes';
import AuthLayout from './component/Auth/AuthLayout';
import Events from './component/Dashboard/Events';
import Finance from './component/Dashboard/finance';
import Users from './component/Dashboard/Users';
import Book from './component/Dashboard/Bookings/Book';

import { Helmet } from "react-helmet"

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
        <>
        <React.StrictMode>

        
          <Helmet>
            <script src="https://js.paystack.co/v1/inline.js" async></script> 
          </Helmet>
          <Routes>
              <Route path = "/" element = { < Layout /> } >
                  <Route path = "/" element = { < Home /> }/> 
                  <Route path = "/event/:id" element = { < SingleEvent /> } /> 
                  <Route element = { <ProtectedRoutes/> } > 
                      < Route path = "book/:id" element = { < Book /> } /> 
                  </Route>
              </Route>

              <Route path = "/" element = { < AuthLayout /> } >
                  <Route path = "register" element = { < Register /> }/> 
                  <Route path = "forget" element = { <ForgetPassword /> }/> 
                  <Route path = "login" element = { < Login /> }/> 
              </Route>

              <Route element = { <ProtectedRoutes/> } > 
                  {/* < Route path = "book/:id" element = { < Book /> } />  */}
                  < Route path = 'dashboard' element = { < DashLayout /> }> 
                      < Route path = "/dashboard" element = { < DashHome /> } /> 
                      < Route path = "events" element = { < Events /> } /> 
                      < Route path = "finance" element = { < Finance /> } /> 
                      < Route path = "users" element = { < Users /> } /> 
                      < Route path = "bookings" element = { < Bookings /> } /> 
                      < Route path = "payments" element = { < Payments /> } /> 
                      < Route path = "profile" element = { < Profile /> } /> 
                      < Route path = "password" element = { < ChangePwd /> } /> 
                  </Route > 
              </Route> 
          </Routes>
        </React.StrictMode>
    </>
    );
}

export default App;