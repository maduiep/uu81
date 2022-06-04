import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-around">
          <div className='brand d-flex justify-content-between align-items-center'>
            <img src="/assets/uu81_logo1.png" alt="LOGO" width="40"/>
            <h6>UNIQUE UNIPORT81</h6>
          </div>
          <div 
            className="" id="navbarSupportedContent">
            <form className="d-flex btn-style">
              <button type="button" class="btn btn-outline-primary">
                Register
              </button>
              <button type="button" class="btn btn-outline-primary ms-3">
                SignIn
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar