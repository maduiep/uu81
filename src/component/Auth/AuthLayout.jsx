import React from 'react'
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height:'100vh',padding:'50px 0px' }}
    >
        <Outlet/>
    </Grid>
  )
}

export default AuthLayout