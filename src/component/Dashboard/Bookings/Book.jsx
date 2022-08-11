import React,{ useEffect, useState } from 'react'
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
    Container
   } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom';
import { axiosGet } from '../../../api/axios';
import { useDispatch,useSelector } from 'react-redux';
import { bookEvent } from '../../../app/bookingSlice';
import { toast } from 'react-toastify';
const Book = () => {
    const dispatch = useDispatch();
    // const { userId, user } = useSelector(state=> state.auth);
    const [userRole, setuserRole] = useState(null);

    const [userEmail, setuserEmail] = useState(null);
    const [userFirstName, setuserFirstName] = useState(null);
    const [userLastName, setuserLastName] = useState(null);
    const [userPhone, setuserPhone] = useState(null);
    const [space ,setspace]= useState(false)
    const [age ,setage]= useState(false)
    const [amount, setAmount]= useState(1000)
    const [booking ,setBooking]= useState(false)
    const [TransactionRef, setTransactionRef] = useState(null)
    const { id } = useParams();
    const navigate =  useNavigate();
    useEffect(()=>{
        if(id !== undefined){
          setBooking(true)
        }
    },[id])


    useEffect(()=>{
        if(TransactionRef !== null){
            const payload = {
                event_id: id,
                dir: '1',
                space: '1'
            }
            dispatch(bookEvent(payload)).then((res)=>{
                if(res.status === "201" ){
                    toast.success('Booking Successfull')
                }
                
                if(res.status === "409"){
                    toast.error('User has Booked this Event Already')
                }

                setTimeout(()=>{
                    navigate('/dashboard/bookings')
                },3000)
            })
        }
    },[id,TransactionRef])

    const handlePaystack =()=>{
        // eslint-disable-next-line no-undef
        let handler = PaystackPop.setup({
            key: 'pk_test_53671b979722086d6c68d503a6a26db3715b6bdc', // Replace with your public key
            email: userEmail,
            amount: amount,
            onClose: function(){
                alert('Window closed.');
            },
            callback: function(response){
                // let message = 'Payment complete! Reference: ' + response.reference;
                toast.success('Payment Successfull')
                setTransactionRef(response.reference);
            // alert(message);
            }
        });
        handler.openIframe();
    }
  return (
    <>
        <Grid item xs={8}>
              <Container maxWidth="md" sx={{
                paddingTop:5
              }}>

                <Box sx={{ marginBottom:4}}>
                    <Grid item xs={12}><Typography variant='h4'>Booking</Typography></Grid>
                </Box>
                <Grid container spacing={2} sx={{ marginBottom: 5}}>
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
                                value={userEmail}
                                onChange={ e=> setuserEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                type="tel" 
                                size="small" 
                                fullWidth 
                                placeholder="Phone" 
                                id="outlined-basic" 
                                label="Phone" 
                                variant="outlined" 
                                value={ userPhone }
                                onChange={e => setuserPhone(e.target.value)}
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
                                value={ userFirstName }
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
                                value={ userLastName }
                                onChange={ e => setuserLastName(e.target.value) }
                            />
                        </Grid>
                    </Grid>
                    <Grid container item spacing={3}>
                        <Grid item xs={6}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Age range</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age range"
                                onChange={e => setage(e.target.value)}
                            >
                                <MenuItem value={10}>20-10</MenuItem>
                                <MenuItem value={20}>30-40</MenuItem>
                                <MenuItem value={30}>40-50</MenuItem>
                                <MenuItem value={30}>50 and above</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Spaces</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Spaces"
                                onChange={e => setspace(e.target.value)}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    
                    <Grid container item>
                        <Grid item xs={3}>
                            <Button
                                variant="contained" 
                                color="primary"
                                onClick={handlePaystack}
                            >Book Now</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
   </>
  )
}

export default Book