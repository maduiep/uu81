import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-around">
          <div className='brand d-flex justify-content-between align-items-center'>
           <Link style={{textDecoration: 'none', color: 'gray'}} className='d-flex justify-content-between align-items-center' to="/">
            <img src="/assets/uu81_logo1.png" alt="LOGO" width="40"/>
            <h6>UNIQUE UNIPORT81</h6></Link>
          </div>
          <div 
            className="" id="navbarSupportedContent">
            <form className="d-flex btn-style">
              <button type="button" class="btn btn-outline-primary btn-hover">
               <Link style={{textDecoration: 'none', listStyleType: 'none'}} to='/register'> Register</Link>
              </button>
              <button type="button" class="btn btn-outline-primary ms-3 btn-hover">
              <Link style={{textDecoration: 'none', listStyleType: 'none'}} to='/login'> SignIn</Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar