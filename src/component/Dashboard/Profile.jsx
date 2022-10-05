import { 
  Box, 
  Grid, 
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
 } from '@mui/material'
import React,{ useEffect, useState } from 'react'
// import { IoIosArrowDown } from 'react-icons/io'
import { GetUser } from '../../app/authSlice'
import { useSelector, useDispatch } from 'react-redux'
const Profile = () => {
 
  const dispatch = useDispatch();
  const { userId, user } = useSelector(state=> state.auth);
  const [userData, setUserData] = useState(null);
  const [userRole, setuserRole] = useState(null);
  const [userEmail, setuserEmail] = useState(null);
  const [userFirstName, setuserFirstName] = useState(null);
  const [userLastName, setuserLastName] = useState(null);
  const [userPhone, setuserPhone] = useState(null);
  const [userImage, setuserImage] = useState(null);

  useEffect(()=>{
    dispatch(GetUser(userId))
  },[])
  useEffect(()=>{
    if(user !== []){
      setuserImage(user.image_url)
      setuserEmail(user.email)
      setuserFirstName(user.first_name)
      setuserLastName(user.last_name)
      setuserPhone(user.phone_number)
    }
  },[user])
  
  return (
   <>
   <Box sx={{ marginBottom:4}}>
      <Grid item xs={12}><Typography variant='h4'>My Profile</Typography></Grid>
   </Box>
   <Grid container spacing={2} sx={{ marginBottom: 5}}>
      <Grid container item >
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userRole  || ''}
            label="Age"
            onChange={e => setuserRole(e.target.value)}
            disabled
          >
            <MenuItem value={10}>Member</MenuItem>
            <MenuItem value={20}>Admin</MenuItem>
            <MenuItem value={30}>Visitor</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container item spacing={3}>
          <Grid item xs={6}>
              <TextField 
                type="email" 
                size="small" 
                fullWidth 
                placeholder="Enter email" 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                value={userEmail  || ''}
                onChange={ e=> setuserEmail(e.target.value)}
              />
          </Grid>
          <Grid item xs={6}>
              <TextField 
                type="password" 
                size="small" 
                fullWidth 
                placeholder="Password" 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                disabled
              />
          </Grid>
      </Grid>
      <Grid container item spacing={3}>
          <Grid item xs={6}>
              <TextField 
                type="text" 
                size="small" 
                fullWidth 
                placeholder="First Name" 
                id="outlined-basic" 
                label="First Name" 
                variant="outlined" 
                value={ userFirstName  || '' }
                onChange={ e => setuserFirstName(e.target.value)}
              />
          </Grid>
          <Grid item xs={6}>
              <TextField 
                type="text" 
                size="small" 
                fullWidth 
                placeholder="Last Name" 
                id="outlined-basic" 
                label="Last Name" 
                variant="outlined" 
                value={ userLastName  || '' }
                onChange={ e => setuserLastName(e.target.value) }
              />
          </Grid>
      </Grid>
      <Grid container item spacing={3}>
          {/* <Grid item xs={6}>
              <TextField type="text" fullWidth placeholder="First Name" id="outlined-basic" label="First Name" variant="outlined" />
          </Grid> */}
          <Grid item xs={6}>
              <TextField 
                type="tel" 
                size="small" 
                fullWidth 
                placeholder="Phone Number" 
                id="outlined-basic" 
                label="Phone Number" 
                variant="outlined" 
                value={ userPhone  || '' }
                onChange={ e => setuserPhone(e.target.value)}
              />
          </Grid>
      </Grid>
      <Grid container item >
        <Box sx={{
          width:'100%',
          height: '30vh',
        }}>
            <TextField 
              type="file" 
              name="filename" 
              size="small" 
              fullWidth 
              id="file" 
              sx={{ display:'none'}} 
              
            />
            <InputLabel 
              for="file" 
              sx={{
                width:'100%',
                height: '30vh',
                borderRadius:3,
                border: '5px dashed #ccc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
                
              }}

            > Click To Drop Your Files Here </InputLabel> 
        </Box>
      </Grid>
      <Grid container item>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">Save Changes</Button>
          </Grid>
      </Grid>
   </Grid>
   </>
  )
}

export default Profile