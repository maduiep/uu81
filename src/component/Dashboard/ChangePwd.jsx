import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { axiosGet } from './../../api/axios';
import { toast } from 'react-toastify';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ls from 'localstorage-slim';
const ChangePwd = () => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(true);
    const [tokenSet, setTokenSet] = React.useState(false);
    const [resetEmail, setresetEmail] = React.useState(false);
    const [email, setemail] = React.useState(null);
    const [token, setToken] = React.useState(null);

    const handleEmail = (e) => setemail(e.target.value);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setLoading(false)
    //     },5000)
    // },[])

    useEffect(()=>{
        if(newPassword.length >= 5 && confirmNewPassword.length >= 5){
            setDisable(false)
        }else{
            setDisable(true)
        }
    },[newPassword,confirmNewPassword])

    useEffect(() => {
        if (resetEmail) {
          setLoading(false);
        }
    } , [resetEmail]);
    
    useEffect(() => {
    
        // console.log(ls.get('reset'));
        const token = ls.get('reset');
        console.log(token);
        if (token?.resetEmail) {
          setToken(token);
          setTokenSet(true);
        }
    } , []);
    
    const HandlePWD = async()=>{
        
        setLoading(true);
        
        const payload = {
            password: newPassword,
            confirm_password: confirmNewPassword
        }

        const response = await axiosGet.post('/reset_password/UU81',payload);
        if(response.status === '200'){
            setLoading(false);
            console.log(response.data);    
        }else{
            setLoading(false);
        }
        // if(response.status === '401'){
        //     setLoading(true);
        //     console.log(response.data);    
        // }
        // if(response.status === '401'){
        //     setLoading(true);
        //     console.log(response.data);    
        // }
    }
    const handleSubmit = async()=>{
        setLoading(true);
        const payload = {
          email
        }
    
        const response = await axiosGet.post('/reset_password',payload);
        console.log(response);
        if(response.status === 200){
          toast.success('Email has been sent to your email');
          setresetEmail(true);
          localStorage.setItem('reset', JSON.stringify({resetEmail: true, token: response.data.access_token}));
          // ls.set('reset',{
          //   'resetEmail': true,
          //   'email': email,
          //   'token': response.data.access_token
          // });
        }
    
        if(response.status === 403 ) {
          toast.error('Email not found');
          setresetEmail(false);
        }
    
      }
  return (
    <>
        <Box sx={{ marginBottom:4}}>
            <Grid item xs={12}><Typography variant='h4'>Change PassWord</Typography></Grid>
        </Box>
        <Grid 
            container 
            xs={12} 
            justifyContent='center'
            alignItems='center'
            sx={{
            height: '60vh'
        }}>
            <Grid item xs></Grid>
            <Grid item xs={8}>
                <Box container sx={{
                    width: '100%',
                    height: '40vh',
                }}>
                    {
                        tokenSet ? (
                            <>
                            
                                <Grid container item spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField 
                                            type='password' 
                                            size="small" 
                                            fullWidth 
                                            placeholder="New Password" 
                                            id="outlined-basic" 
                                            label="New Password" 
                                            variant="outlined"  
                                            value={ newPassword }
                                            onChange={e => setNewPassword(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField 
                                            type='password' 
                                            size="small" 
                                            fullWidth 
                                            placeholder="Confirm New Password" 
                                            id="outlined-basic" 
                                            label="Confirm New Password" 
                                            variant="outlined"  
                                            value={ confirmNewPassword }
                                            onChange={e => setConfirmNewPassword(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <LoadingButton 
                                            loading={loading} 
                                            variant="contained" 
                                            color="primary"
                                            disabled={disable}
                                            onClick={HandlePWD}
                                        >
                                            Save Changes
                                        </LoadingButton>
                                    </Grid>
                                </Grid>
                            </>
                        ):(
                            <>
                            <>  
                {
                  !resetEmail ? (
                    <>
                      
                        <Typography variant='h4'>Reset Password {process.env.SECRET_KEY}</Typography>
                        <Typography mb={2} variant='body1'>Enter your email to reset your password</Typography>
                        
                        <TextField
                          type={'email'}
                          label='Email'
                          value={email}
                          onChange={handleEmail}
                          variant='outlined'
                          fullWidth
                          sx={{
                            marginBottom:'20px'
                          }}
                        />
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={handleSubmit}
                          disabled={loading}
                        >
                          {
                            loading ? 'Loading...' : 'Submit' 
                          }
                        </Button>
                    </>
                  ) : (
                    <>
                      <Typography variant='h6' sx={{
                        textAlign:'center',
                        fonSize:'14px'
                      }}>
                          An email has been sent with instructions to reset your passsword 
                          &nbsp;
                          <Link to='/login'>Back to Home</Link>
                      </Typography>
                      
                    </>
                  )
                }
            </>
                            </>
                        )
                    }
                </Box>
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    </>
  )
}

export default ChangePwd