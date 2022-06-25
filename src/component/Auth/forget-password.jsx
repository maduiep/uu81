import React from 'react'
import { 
  Box,
  Button,
  Grid,
  Typography,
  TextField
} from '@mui/material';

const ForgetPassword = () => {
  const [email, setemail] = React.useState(null);

  const handleEmail = (e)=>{
    setemail(e.target.value);
  }
  return (
    

      <Box
        sx={{
          width:'500px',
          border: '1px solid #ccc',
          padding:'20px'
        }}
      >
        <Grid container item spacing={3}>
          <Grid container item >
            <Typography variant="h5">Forgot password</Typography>
          </Grid>
          <Grid container item >
            <TextField fullWidth value={email} onChange={handleEmail}  id="outlined-basic" label="Email" placeholder='Enter Email' variant="outlined"/>
          </Grid>
          <Grid container item >
            <Button variant="outlined">Send</Button>
          </Grid>
        </Grid>
      </Box>
  )
}

export default ForgetPassword