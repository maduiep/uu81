import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
import Event from './Event';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        {/* <Event /> */}
        <Footer />
    </>
    )
}

export default Layout