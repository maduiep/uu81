import React,{ useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Register as Reg } from '../../app/authSlice';
import { 
  Grid,
  Box,
  Typography,
  TextField
 } from '@mui/material';
const Register = () => {

  const dispatch = useDispatch();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [phone, setphone] = useState();

    const { userRegistered } = useSelector((state)=> state.auth)

  const HandleSubmit = (e)=>{
    
    e.preventDefault();

    const payload = {
      "email":email,
      "password":password,
      "phone_number" : parseInt(phone),
      "admin" : false,
      "is_host" : false
    }

    dispatch(Reg(payload))
  }
  return (
    <>
    {
      userRegistered && (
        <Navigate to="/login" replace={true} />
      )
    }
     

      <Box
        sx={{
          width:'500px',
          border: '1px solid #ccc',
          padding:'20px',
          borderRadius:'10px'
        }}
      >

          <Typography variant="h4" className='mt-4'> Membership Registration</Typography>
          <form onSubmit={HandleSubmit} className='d-flex justify-content-center flex-column mt-4'>
          <Grid container item spacing={3}>
            <Grid container item >
              <TextField fullWidth value={ email } onChange={e=> setemail(e.target.value)}  id="outlined-basic" label="Email" placeholder='Enter Email' variant="outlined"/>
            </Grid>
            <Grid container item >
              <TextField fullWidth value={ password } onChange={e=> setpassword(e.target.value)}  id="outlined-basic" label="Password" placeholder='Enter Password' variant="outlined"/>
            </Grid>
            <Grid container item >
              <TextField fullWidth value={ firstname } onChange={e=> setfirstname(e.target.value)}  id="outlined-basic" label="First Name" placeholder='Enter First Name' variant="outlined"/>
            </Grid>
            <Grid container item >
              <TextField fullWidth value={ lastname } onChange={e=> setlastname(e.target.value)} id="outlined-basic" label="Last Name" placeholder='Enter Last Name' variant="outlined"/>
            </Grid>
            <Grid container item >
              <TextField fullWidth value={ phone } onChange={e=> setphone(e.target.value)} id="outlined-basic" label="Phone number" placeholder='Enter Phone number' variant="outlined"/>
            </Grid>
            <Grid container item >
              <TextField fullWidth value={ lastname } onChange={e=> setlastname(e.target.value)} id="outlined-basic" label="Email" placeholder='Enter Lastname' variant="outlined"/>
            </Grid>
          </Grid>
    
              &nbsp;
              <small id="emailHelp" class="form-text text-muted color">Already have an account?</small>
              <button type="submit" className="btn btn-primary mt-4 mb-4">Submit</button>
            </form>
      </Box>
    </>
  )
}

export default Register