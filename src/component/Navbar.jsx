import React,{ useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../app/authSlice';
// import { Link } from 'react-router-dom'
const Navbar = () => {
const dispatch = useDispatch();

const [navBackground, setNavBackground] = useState('navbar-transparent')
const { isLoggedIn } = useSelector((state)=> state.auth)

const navRef = useRef()

navRef.current = navBackground

const handleScroll = () => {
  const show = window.scrollY > 1;
  console.log(show);

  if (show) {
      setNavBackground('navbar-color fixed ')
  } else {
      setNavBackground('navbar-transparent')
  }
}
const Handlelogout = ()=>{
  dispatch(logout());
}
useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
}, [])

  return (
    <>
      <nav style={{ zIndex:'10000' }} className={`navbar navbar-expand-lg ${ navRef.current }`}>
        <div className="container-fluid d-flex justify-content-around">
          <div className='brand d-flex justify-content-between align-items-center'>
            <img src="/assets/uu81_logo1.png" alt="LOGO" width="40"/>
            <h6>UNIQUE UNIPORT81</h6>
          </div>
          <div 
            className="" id="navbarSupportedContent">
            <form className="d-flex btn-style">
              {
                isLoggedIn ?(
                  <>
                  <button onClick={Handlelogout} className="btn btn-outline-primary">
                    Logout
                  </button>
                  </>
                ):(
                  <>
                    <Link to={'/register'} className="btn btn-outline-primary">
                      Register
                    </Link>
                    <Link to={'/login'} className="btn btn-outline-primary ms-3">
                      SignIn
                    </Link>
                  </>
                )
              }
              
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar