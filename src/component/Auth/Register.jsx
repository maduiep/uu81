import React from 'react'


const Register = () => {
  return (
    <>
     <div className="container">
     <form className='d-flex justify-content-center flex-column mt-4'>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        &nbsp;
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        &nbsp;
        <div className="form-group">
          <label for="exampleInputFirstname">First name</label>
          <input type="firstname" className="form-control" id="exampleInputFirstname" aria-describedby="firstnameHelp" placeholder="Enter Firstname" />
        </div>
        &nbsp;
        <div className="form-group">
          <label for="exampleInputLastname">Last name</label>
          <input type="Lastname" className="form-control" id="exampleInputLastname" aria-describedby="lastnameHelp" placeholder="Enter Lastname" />
        </div>
        &nbsp;
        <div className="form-group">
          <label for="exampleInput Phone number">Phone number</label>
          <input type="phone" className="form-control" id="exampleInputPhone number" aria-describedby="Phone numberHelp" placeholder="Enter Phone number" />
        </div>
        <button type="submit" className="btn btn-primary mt-4 mb-4">Submit</button>
      </form>
     </div>
    </>
  )
}

export default Register