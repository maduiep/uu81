import { Grid, Select, TextField, MenuItem } from '@mui/material'
import React from 'react'

const AddEvent = () => {
    const [age, setAge] = React.useState('')

    const handleChange = (event) => {
        setAge(event.target.value)
    }
  return (
    <>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Select
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    fullWidth={true}
                    label="Type"
                >
                <MenuItem value={10}>WorkShop</MenuItem>
                <MenuItem value={21}>Reunion</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-basic" 
                    fullWidth={true}
                    label="Outlined" 
                    variant="outlined" 
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-basic" 
                    fullWidth={true}
                    label="Outlined" 
                    variant="outlined" 
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-basic" 
                    fullWidth={true}
                    label="Outlined" 
                    variant="outlined" 
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-basic" 
                    fullWidth={true}
                    label="Outlined" 
                    variant="outlined" 
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-basic" 
                    fullWidth={true}
                    label="Outlined" 
                    variant="outlined" 
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="outlined-basic" 
                    fullWidth={true}
                    label="Outlined" 
                    variant="outlined" 
                />
            </Grid>
        </Grid>
    </>
  )
}

export default AddEvent