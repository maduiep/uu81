import { Grid, Select, TextField, MenuItem, InputAdornment, Box, InputLabel, FormControl, FormLabel, OutlinedInput } from '@mui/material'
import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../app/eventSlice';
import { toast } from 'react-toastify';
// import {fs} from 'fs';
const AddEvent = ({ close, reload }) => {
    const [age, setAge] = React.useState('')
    const [name, setName] = React.useState('')
    const [cost, setCost] = React.useState('')
    const [edition, setEdition] = React.useState('')
    const [venue, setVenue] = React.useState('')
    const [venueAddress, setVenueAddress] = React.useState('')
    const [contactPhone, setContactPhone] = React.useState('')
    const [contactEmail, setContactEmail] = React.useState('')
    const [cancellationMessage, setCancellationMessage] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [startDate, setStartDate] = React.useState('')
    const [endDate, setEndDate] = React.useState('')
    const [startTime, setStartTime] = React.useState('')
    const [endTime, setEndTime] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [questions, setQuestions] = React.useState('')
    const [image, setImage] = React.useState('')
    const [loading , setLoading] = React.useState(false);
    const [file, setFile] = React.useState('')
    const dispatch = useDispatch();
    const { events } = useSelector(state => state.event)

    const handleChange = (event) => {
        setAge(event.target.value)
    }
    const uploadImage = async (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setImage(base64);
    };
    
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    const newEvent = async () => {
        setLoading(true)
        // name: name,
        // age: age,
        // cost: cost,
        // edition: edition,
        // venue: venue,
        // venueAddress: venueAddress,
        // contactPhone: contactPhone,
        // contactEmail: contactEmail,
        // cancellationMessage: cancellationMessage,
        // description: description,
        // startDate: startDate,
        // endDate: endDate,
        // startTime: startTime,
        // endTime: endTime,
        // location: location,
        // questions: questions,
        // image: image
        // const file =   '@file.png;type=image/png';

        // console.log(file);
        var formData = new FormData();
        formData.append('title',name);
        formData.append('file',file);
        formData.append('content',description);
        formData.append('image_url',image);
        formData.append('status',false);
        formData.append('space_allowed', 50);
        formData.append('space_available', 50);
        formData.append('cost', cost);
        // const payload = {
        //     title: name,
        //     file: file,
        //     content:description,
        //     image_url: image,
        //     status: false,
        //     space_allowed: 50,
        //     space_available: 50,
        //     cost: cost,
        // }
    dispatch(addEvent(formData)).then((res) => {
        toast.success("Event Added Successfully");
        setLoading(false)
        setTimeout(()=>{
            reload();
            close();
        },2000);
        console.log("Response: ", res);
    })
    console.log(formData)
    }
    const fileupload = (e)=>{
        setFile(e.target.files[0])
        console.log('file: ', e.target.files[0]);
    }
  return (
    <>
        <Box sx={{
            height: '80vh',
            overflow: 'auto',
            padding: '2rem',
            width: '100%',
        }}>
            <Grid container spacing={3}>
                {/* <Grid item xs={12}>
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
                </Grid> */}
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Name Of Event" 
                        variant="outlined"
                        placeholder='Name Of Event'
                        size='small'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Edition" 
                        variant="outlined" 
                        placeholder='Edition'
                        size='small'
                        value={edition}
                        onChange={(e)=>setEdition(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="State Date" 
                            value={startDate}
                            onChange={(e)=>setStartDate(e)}
                            renderInput={(params) => <TextField fullWidth={true} size="small" {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="End Date" 
                            value={endDate}
                            onChange={(e)=>setEndDate(e)}
                            
                            renderInput={(params) => <TextField fullWidth={true} size="small" {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="State Time" 
                    value={startTime}
                    onChange={(e)=>setStartTime(e)}
                    renderInput={(params) => <TextField fullWidth={true} size="small" {...params} />}
                    />
                </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="End Time"
                    value={endTime}
                    onChange={(e)=>setEndTime(e)}
                    renderInput={(params) => <TextField fullWidth={true} size="small" {...params} />}
                    />
                </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Venue" 
                        variant="outlined" 
                        size='small'
                        placeholder='Venue'
                        value={venue}
                        onChange={(e)=>setVenue(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Venue address"
                        variant="outlined" 
                        size='small'
                        placeholder='Venue address'
                        value={venueAddress}
                        onChange={(e)=>setVenueAddress(e.target.value)}
                    />
                </Grid> */}
                <Grid item xs={12}>
                    <TextField
                        type={'tel'}
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Contact phone"
                        variant="outlined" 
                        size='small'
                        placeholder='Contact phone'
                        value={contactPhone}
                        onChange={(e)=>setContactPhone(e.target.value)}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Contact Email"
                        variant="outlined" 
                        size='small'
                        placeholder='Contact Email'
                        value={contactEmail}
                        onChange={(e)=>setContactEmail(e.target.value)}
                    />
                </Grid> */}
                <Grid item xs={12}>
                    <TextField
                        type={'number'}
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
                        placeholder='Cost of Participation'
                        value={cost}
                        onChange={(e)=>setCost(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        multiline
                        minRows={4}
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Description" 
                        variant="outlined" 
                        size='small'
                        placeholder='Description'
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField
                        type={'textarea'}
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Cancellation message" 
                        variant="outlined" 
                        size='small'
                        placeholder='Cancellation message'
                        value={cancellationMessage}
                        onChange={(e)=>setCancellationMessage(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type={'textarea'}
                        id="outlined-basic" 
                        fullWidth={true}
                        label="Location" 
                        variant="outlined" 
                        size='small'
                        placeholder='Location'
                        value={location}
                        onChange={(e)=>setLocation(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type={'textarea'}
                        id="outlined-basic"
                        fullWidth={true}
                        label="Questions"
                        variant="outlined"
                        size='small'
                        placeholder='Questions'
                        value={questions}
                        onChange={(e)=>setQuestions(e.target.value)}
                        rows={4}
                    />
                </Grid> */}
                {/* <Grid item xs={12}>
                    <FormControl variant="standard" sx={{
                        width: '100%',
                        border: '3px dashed #eaeaea',
                        borderRadius: '5px',
                        padding: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {/* <InputLabel id="image-upload" >Event Post image</InputLabel>
                        <TextField
                            id="image-upload"
                            type={'file'}
                            fullWidth={true}
                            variant="outlined"
                            size='small'
                            // value={image}
                            onChange={uploadImage}
                        />
                    </FormControl>
                </Grid> */}
                <Grid item xs={12}>
                    
                        <TextField
                            fullWidth={true}
                            label="File"
                            id="file-upload"
                            type={'file'}
                            variant="outlined"
                            size='small'
                            // value={image}
                            onChange={fileupload}
                        />
                </Grid>
                    <Grid container item xs={12} justifyContent="flex-end">
                        <LoadingButton loading={loading} onClick={newEvent} variant="outlined">
                            Create New Event
                        </LoadingButton>
                    </Grid>

            </Grid>

        </Box>
    </>
  )
}

export default AddEvent