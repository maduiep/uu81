import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { axiosGet } from './../../api/axios';

const ChangePwd = () => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(true);
    
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
                </Box>
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    </>
  )
}

export default ChangePwd