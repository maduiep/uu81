import { Grid, Select, TextField, MenuItem, InputAdornment, Box  } from '@mui/material'
import React from 'react'

const AddEvent = () => {
    const [age, setAge] = React.useState('')

    const handleChange = (event) => {
        setAge(event.target.value)
    }
  return (
    <>
        <Box sx={{
            height: '60vh',
            overflow: 'auto',
            padding: '2rem',
            width: '100%',
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Select
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        fullWidth={true}
                        label="Type"
                        size='small'
                    >
                    <MenuItem value={10}>WorkShop</MenuItem>
                    <MenuItem value={21}>Reunion</MenuItem>
                </Select>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Name Of Event" 
                        variant="outlined"
                        placeholder='Name Of Event'
                        size='small'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Edition" 
                        variant="outlined" 
                        placeholder='Edition'
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        type="date"
                        id="outlined-basic" 
                        fullWidth={true}
                        label="State Date" 
                        variant="outlined" 
                        placeholder='State Date'
                        size='small'
                        />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        type="date"
                        id="outlined-basic" 
                        fullWidth={true}
                        label="End Date" 
                        variant="outlined" 
                        placeholder='End Date'
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        type="time"
                        id="outlined-basic" 
                        fullWidth={true}
                        label="State Time" 
                        variant="outlined" 
                        placeholder='State Time'
                        size='small'
                        />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        type="date"
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Outlined" 
                        variant="outlined" 
                        placeholder='End Time'
                        size='small'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Venue" 
                        variant="outlined" 
                        size='small'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Venue address"
                        variant="outlined" 
                        size='small'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Contact phone"
                        variant="outlined" 
                        size='small'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Contact Email"
                        variant="outlined" 
                        size='small'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Cost of Participation"
                        variant="outlined"
                        size='small'
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">₦</InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        type={'number'}
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Spaces/slot allowed" 
                        variant="outlined" 
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        type={'number'}
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Spaces/slot allowed" 
                        variant="outlined"
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        type={'number'}
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Spaces/slot allowed" 
                        variant="outlined" 
                        size='small'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        type={'textarea'}
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Spaces/slot allowed" 
                        variant="outlined" 
                        size='small'
                    />
                </Grid>
            </Grid>

        </Box>
    </>
  )
}

export default AddEvent