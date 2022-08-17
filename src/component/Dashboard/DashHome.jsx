import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { GetUser } from '../../app/authSlice';
import ls from 'localstorage-slim';
const DashHome = () => {
  const dispatch = useDispatch();

  const { userId, user } = useSelector(state => state.auth); 
  const [username,setusername]=useState('');
  
  useEffect(()=>{
    if(userId !== undefined){
      dispatch(GetUser(userId));  
    }else{
      console.log('not logged in')
    }
  },[dispatch, userId])

  useEffect(()=>{
    if(user){
      // setusername(user.)
      console.log('this guy ->',user);
      setusername(user.first_name+' '+user.last_name);
    } 
  },[user])

  useEffect(()=>{
    // const storage = ls.get('token');
    // console.log('storage', storage);
  },[])
  
  return (
    <div className="container ">
      <div className="profile-wrapper d-flex align-items-center justify-content-center mt-4 mb-4">
        <div className="profile d-flex align-items-center flex-column">
          <img src="/assets/profile.jpg" alt="" />
          <h3 className='mt-4 text-sm-center'>Welcome, {username}</h3>
          <p>6/4/2022 7:45:43 PM</p>
        </div>
      </div>
  </div>
  )
}

export default DashHome