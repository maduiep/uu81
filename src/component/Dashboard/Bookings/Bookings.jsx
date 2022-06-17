import React from 'react'
// import DataTable from '../DataTable'
import { Grid } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import BokkingTable from './bookingTable';
const Bookings = () => {
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