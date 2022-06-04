import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
import Event from './Event';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
        <Navbar/>
<<<<<<< HEAD
          <Outlet/>
        <Footer/>
=======
        <Outlet/>
        <Event />
        <Footer />
>>>>>>> 51bca866ea069c08f5e066600f16355f581eaa72
    </>
    )
}

export default Layout