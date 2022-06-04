import React,{ useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  
const [navBackground, setNavBackground] = useState('navbar-transparent')
const navRef = useRef()

navRef.current = navBackground

const handleScroll = () => {
  const show = window.scrollY > 3;
  console.log(show);

  if (show) {
      setNavBackground('navbar-color fixed ')
  } else {
      setNavBackground('navbar-transparent')
  }
}

useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
}, [])

  return (
    <>
      <div className="main">
        <header className='header'>
          <nav className={`navbar navbar-expand-lg ${ navRef.current }`}>
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
          
          <div className="container mt-4 header-main d-flex justify-content-center">
            <div className="header-main-text">
              <h3>Unique Uniport 81</h3>
              <p>For Enlightment And Self Reliance</p>
            </div>
          </div>
          {/* <div className="" id="navbarSupportedContent">
            <form className="d-flex btn-style">
              <button type="button" class="btn btn-outline-primary btn-hover">
               <Link style={{textDecoration: 'none', listStyleType: 'none'}} to='/register'> Register</Link>
              </button>
              <button type="button" class="btn btn-outline-primary ms-3 btn-hover">
              <Link style={{textDecoration: 'none', listStyleType: 'none'}} to='/login'> SignIn</Link>
              </button>
            </form>
          </div> */}
          </header>
        </div>
    </>
  )
}

export default Navbar