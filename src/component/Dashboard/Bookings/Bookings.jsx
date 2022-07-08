import React, { useState,useEffect} from 'react'
// import DataTable from '../DataTable'
import { Grid } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
// import { axiosGet } from '../../../api/axios';

import BokkingTable from './bookingTable';
// import Book from './Book';
const Bookings = () => {
  
  const [booking ,setBooking]= useState(false)

  const { id } = useParams();

  useEffect(()=>{
    if(id !== undefined){
      setBooking(true)
      console.log('basic %d', booking);
    }
    
  },[ id, booking ])
  return (
    <>
        <Box sx={{
          marginBottom:3,
        }}>
          <Grid item xs={12}><Typography variant='h4'>Bookings</Typography></Grid>
        </Box>
        {/* <DataTable /> */}
        
        <BokkingTable/>       
    </>
  )
}

export default Bookings