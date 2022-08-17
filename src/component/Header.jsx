import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <div className="main">
        <header className='header'>
          <Navbar />
          <div className="container header-main">
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

export default Header