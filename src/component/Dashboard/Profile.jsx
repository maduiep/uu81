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

const Profile = () => {
  const lineStyle = {
    width: '15rem',
    height: '1px',
    backgroundColor: 'gray'
  }
  
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
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Member</MenuItem>
            <MenuItem value={20}>Admin</MenuItem>
            <MenuItem value={30}>Visitor</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container item spacing={3}>
          <Grid item xs={6}>
              <TextField type="email" size="small" fullWidth placeholder="Enter email" id="outlined-basic" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
              <TextField type="password" size="small" fullWidth placeholder="Password" id="outlined-basic" label="Password" variant="outlined" />
          </Grid>
      </Grid>
      <Grid container item spacing={3}>
          <Grid item xs={6}>
              <TextField type="text" size="small" fullWidth placeholder="First Name" id="outlined-basic" label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
              <TextField type="text" size="small" fullWidth placeholder="Last Name" id="outlined-basic" label="Last Name" variant="outlined" />
          </Grid>
      </Grid>
      <Grid container item spacing={3}>
          {/* <Grid item xs={6}>
              <TextField type="text" fullWidth placeholder="First Name" id="outlined-basic" label="First Name" variant="outlined" />
          </Grid> */}
          <Grid item xs={6}>
              <TextField type="tel" size="small" fullWidth placeholder="Phone Number" id="outlined-basic" label="Phone Number" variant="outlined" />
          </Grid>
      </Grid>
      <Grid container item >
        <Box sx={{
          width:'100%',
          height: '30vh',
        }}>
            <TextField type="file" name="filename" size="small" fullWidth id="file" sx={{ display:'none'}} />
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