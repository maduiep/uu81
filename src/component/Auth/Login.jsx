import React,{ useState, useEffect} from 'react'
import { Login as LoginRequest } from '../../app/authSlice';

import { Navigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

// import axios from 'axios';
// import qs from 'qs';
import { toast } from 'react-toastify';

const Login = () => {

    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    // const [username,setusername] = useState('babajide234@gmail.com');
    // const [password,setpassword] = useState('123456');
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

        dispatch(LoginRequest(payload))
        // .then((res)=>{
        //     console.log(res.response.status);
        //     toast.success('User registered Successfully')
        // }).catch((err)=>{
        //       toast.error('Invalid Credentials')
        //     console.log('err', err);
        //   });
    }

    const handleEmail = (e)=>{
        setusername(e.target.value)
    }
    const handlePassword = (e)=>{
        setpassword(e.target.value)
    }

    // const handleForget = async()=>{
    //     <Navigate to='/forget'/>
    // }


  return (

    <>
        {isLoggedIn && (
          <Navigate to="/dashboard" replace={true} />
        )}
        {/* <div className="container"> */}
                <Grid container justifyContent={'center'} spacing={3}>
                    <Grid item xs={12} lg={5}>
                        <Box sx={{
                            border: '1px solid #e0e0e0',
                            padding: '2rem',
                            borderRadius: '15px',
                            width: '90%',
                            margin: 'auto',
                        }}>
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
                                
                                    <Link to='/forget' id="emailHelp" className="form-text text-muted color">Forgot Password?</Link>
                                    <button type="submit" className="btn btn-primary mt-4 mb-4">Submit</button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
        {/* </div> */}
    </>
  )
}

export default Login