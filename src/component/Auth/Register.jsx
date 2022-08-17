import React,{ useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { Register as Reg } from '../../app/authSlice';
import { 
  Grid,
  Box,
  Typography,
  TextField
 } from '@mui/material';
 import LoadingButton from '@mui/lab/LoadingButton';
 import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [phone, setphone] = useState();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { userRegistered, isLoading } = useSelector((state)=> state.auth)

  const HandleSubmit = (values)=>{
    setLoading(true);

    const payload = {
      first_name: values.firstname,
      last_name: values.lastname,
      email: values.email,
      password: values.password,
      phone_number: parseInt(values.phone),
      admin: false,
      is_host: false
    }
    
    console.log(payload);
    dispatch(Reg(payload)).then((res)=>{
      setLoading(false);
      console.log(res.response.status);
      toast.success('User registered Successfully')
    }).catch((err)=>{
      console.log('err', err.response.status);
      setLoading(false);
    });
  }

  useEffect(()=>{
    if(userRegistered){
      setTimeout(()=>{
        navigate('/login');
      } , 3000);
    }
  } , [userRegistered]);
  
  useEffect(()=>{
    if(isLoading){
      
    }
  } , [isLoading]);

  useEffect(()=>{
    if(password !== confirmPassword){
      setDisabled(true);
    }else{
      setDisabled(false);
    }
  },[password,confirmPassword]);

  const initialValues = {
    email:'',
    password:'',
    confirmPassword:'',
    firstname:'',
    lastname:'',
    phone:''
  }

  const handleChange = (e)=>{
    const { name, value } = e.target;
    switch(name){
      case 'email':
        setemail(value);
        break;
      case 'password':
        setpassword(value);
        break;
      case 'confirmPassword':
        setconfirmPassword(value);
        break;
      case 'firstname':
        setfirstname(value);
        break;
      case 'lastname':
        setlastname(value);
        break;
      case 'phone':
        setphone(value);
        break;
      default:
        break;
    }
  }
  return (
    <>
     
     <Grid container justifyContent={'center'} spacing={3}>
        <Grid item xs={12} lg={5}>
          <Box
            sx={{
              width:'90%',
              border: '1px solid #ccc',
              padding:'20px',
              borderRadius:'10px',
              margin: 'auto',
            }}
          >

              <Typography variant={{ xs: 'h5', md: 'h4'}} className='mt-4'> Membership Registration</Typography>
              <Formik
                initialValues={initialValues}
                onSubmit={HandleSubmit}
                onChange={handleChange}
              >
                {props => (
                    <form onSubmit={props.handleSubmit} className='d-flex justify-content-center flex-column mt-4'>
                      <Grid container item spacing={3}>
                        <Grid container item >
                          <TextField type={'text'} fullWidth value={ props.values.firstname } onChange={props.handleChange} name="firstname"  id="fname" label="First Name" placeholder='Enter First Name' variant="outlined"/>
                        </Grid>
                        <Grid container item >
                          <TextField type={'text'} fullWidth value={ props.values.lastname } onChange={props.handleChange} name="lastname" id="lname" label="Last Name" placeholder='Enter Last Name' variant="outlined"/>
                        </Grid>
                        <Grid container item >
                          <TextField type={'email'} fullWidth value={ props.values.email } onChange={props.handleChange} name="email" id="email" label="Email" placeholder='Enter Email' variant="outlined"/>
                        </Grid>
                        <Grid container item >
                          <TextField type={'number'} fullWidth value={ props.values.phone } onChange={props.handleChange} name="phone" id="phoneNo" label="Phone number" placeholder='Enter Phone number' variant="outlined"/>
                        </Grid>
                        <Grid container item >
                          <TextField type={'password'} fullWidth value={ props.values.password } onChange={props.handleChange} name="password" id="pwd" label="Password" placeholder='Enter Password' variant="outlined"/>
                        </Grid>
                        <Grid container item >
                          <TextField type={'password'} fullWidth value={ props.values.confirmPassword } onChange={props.handleChange} name="confirmPassword" id="confirmPwd" label="Confirm Password" placeholder='Confirm Password' variant="outlined"/>
                        </Grid>
                        <Grid container item spacing={3}>
                          <Grid item xs={12}>
                            <Typography variant='caption'>
                              By clicking Register, you agree to our Terms of Service and Privacy Policy.
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <LoadingButton fullWidth disabled={disabled} loading={loading} type='submit' variant="contained" color="primary">
                              Register
                            </LoadingButton>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant='caption'>
                              Already have an account? <Link to="/login">Login</Link>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </form>
                )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Register