import React from 'react'
import { Grid, Typography, Box } from '@mui/material';

const Payments = () => {
  return (
    <>
    <Box sx={{marginBottom:3,}}>
          <Grid item xs={12}><Typography variant='h4'>Payments</Typography></Grid>
    </Box>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height:'50vh' }}
      >
      <Typography variant="caption">No Payments Available</Typography>
    </Grid>
    </>
  )
}

export default Payments