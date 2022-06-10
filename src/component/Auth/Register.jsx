import React,{ useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Register as Reg } from '../../app/authSlice';
const Register = () => {

  const dispatch = useDispatch();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [phone, setphone] = useState();

    const { isLoggedIn, userRegistered } = useSelector((state)=> state.auth)

  const HandleSubmit = (e)=>{
    
    e.preventDefault();

    const payload = {
      "email":email,
      "password":password,
      "phone_number" : parseInt(phone),
      "admin" : false,
      "is_host" : false
    }

    dispatch(Reg(payload))
  }
  return (
    <>
    {
      userRegistered && (
        <Navigate to="/login" replace={true} />
      )
    }
     <div className="container">
     <h3 className='mt-4'> Membership Registration</h3>
      <form onSubmit={HandleSubmit} className='d-flex justify-content-center flex-column mt-4'>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" value={ email } onChange={e=> setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          &nbsp;
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" value={ password } onChange={e=> setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          &nbsp;
          <div className="form-group">
            <label for="exampleInputFirstname">First name</label>
            <input type="firstname" value={ firstname } onChange={e=> setfirstname(e.target.value)} className="form-control" id="exampleInputFirstname" aria-describedby="firstnameHelp" placeholder="Enter Firstname" />
          </div>
          &nbsp;
          <div className="form-group">
            <label for="exampleInputLastname">Last name</label>
            <input type="Lastname" value={ lastname } onChange={e=> setlastname(e.target.value)} className="form-control" id="exampleInputLastname" aria-describedby="lastnameHelp" placeholder="Enter Lastname" />
          </div>
          &nbsp;
          <div className="form-group">
            <label for="exampleInput Phone number">Phone number</label>
            <input type="phone" value={ phone } onChange={e=> setphone(e.target.value)} className="form-control" id="exampleInputPhone number" aria-describedby="Phone numberHelp" placeholder="Enter Phone number" />
          </div>
          &nbsp;
          <small id="emailHelp" class="form-text text-muted color">Already have an account?</small>
          <button type="submit" className="btn btn-primary mt-4 mb-4">Submit</button>
        </form>
     </div>
    </>
  )
}

export default Register