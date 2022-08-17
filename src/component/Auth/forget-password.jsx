import React, { useEffect } from 'react'
import { 
  Box,
  Button,
  Grid,
  Typography,
  TextField
} from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { axiosGet } from './../../api/axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ls from 'localstorage-slim';
import ChangePwd from '../Dashboard/ChangePwd';
import LoadingButton from '@mui/lab/LoadingButton';
const ForgetPassword = () => {
  const [email, setemail] = React.useState(null);
  const [loading, setloading] = React.useState(false);
  const [resetEmail, setresetEmail] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const [tokenSet, setTokenSet] = React.useState(false);

  const [newPassword, setNewPassword] = React.useState('')
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('')
  const [disable, setDisable] = React.useState(true);

  const handleEmail = (e) => setemail(e.target.value);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    if(newPassword.length >= 5 && confirmNewPassword.length >= 5){
        setDisable(false)
    }else{
        setDisable(true)
    }
  },[newPassword,confirmNewPassword])

  useEffect(() => {
    if (resetEmail) {
      setloading(false);
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

  const handleSubmit = async()=>{
    setloading(true);
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

  const HandlePWD = async()=>{
        
    setloading(true);
    
    const payload = {
        password: newPassword,
        confirm_password: confirmNewPassword
    }

    const response = await axiosGet.post('/reset_password/UU81',payload);
    if(response.status === 200 ){
      setloading(false);
      console.log(response.data);    
      ls.remove('reset');
      setTokenSet(false);
      setresetEmail(false);
      setNewPassword('');
      setConfirmNewPassword('');
      setDisable(true);
      toast.success('Password has been changed');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }else{
      setloading(false);
    }
  }
  return (
    

      <Box
        sx={{
          width:'500px',
          border: '1px solid #ccc',
          padding:'20px'
        }}
      >
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
          ) : (
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
          )
        }
      
      </Box>
  )
}

export default ForgetPassword