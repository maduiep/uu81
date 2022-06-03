import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="main mb-4">
        <header className="header container pt-4">
          <nav className="navbar navbar-expand-lg mb-4">
            <div className="container-fluid d-flex justify-content-between">
              <div className='brand d-flex justify-content-between align-items-center'>
                <img src="/assets/uu81_logo1.png" alt="LOGO" width="40"/>
                <h6>UNIQUE UNIPORT81</h6>
              </div>
              <div 
                className="" id="navbarSupportedContent">
                <form className="d-flex">
                  <button type="button" class="btn btn-outline-light">
                    Register
                  </button>
                  <button type="button" class="btn btn-outline-light ms-3">
                    SignIn
                  </button>
                </form>
              </div>
            </div>
          </nav>
          
          <div className="container header-main d-flex justify-content-center">
            <div className="header-main-text">
              <h3>Unique Uniport 81</h3>
              <p>For Enlightment And Self Reliance</p>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar