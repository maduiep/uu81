import React,{ useState, useEffect} from 'react'
import { Login as LoginRequest } from '../../app/authSlice';

import { Navigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
// import axios from 'axios';
// import qs from 'qs';

const Login = () => {

    const [username,setusername] = useState('user@example.com');
    const [password,setpassword] = useState('string');
    const { isLoggedIn } = useSelector((state)=> state.auth)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(isLoggedIn){
            <Navigate to='/dashboard'/>
        }
        console.log('isLoggedIn',isLoggedIn)
    },[isLoggedIn]);

    const Handlesubmit =  async (e) => {
        e.preventDefault();
        const payload = {
            username,
            password
        }

        dispatch(LoginRequest(payload));
    }

    const handleEmail = (e)=>{
        setusername(e.target.value)
    }
    const handlePassword = (e)=>{
        setpassword(e.target.value)
    }


  return (

    <>
        {isLoggedIn && (
          <Navigate to="/dashboard" replace={true} />
        )}
        <div className="container">
           <h3 className='mt-4'> Enter Credentials</h3>
            <form className='d-flex justify-content-center flex-column mt-4' onSubmit={Handlesubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input value={username} onChange={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                &nbsp;
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input value={ password } onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                &nbsp;
            
                <small id="emailHelp" className="form-text text-muted color">Forgot Password?</small>
                <button type="submit" className="btn btn-primary mt-4 mb-4">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Login