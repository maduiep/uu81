import React from 'react'
import { FiMapPin, FiTwitter } from 'react-icons/fi'
import { MdOutlineCall } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import { TbWorld } from 'react-icons/tb'

const Footer = () => {
  return (
    <>
        <div className="footer-wrapper">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="text-wrapper mt-4">
                  <p className='pt-4'> <span>&#169;</span> 2022 UNIQUE UNIPORT 81</p>
                  <p> <span> <FiMapPin /></span> 27A Hill View, Independence Layout, P O Box 1296, Enugu</p>
                  <p> <span> <MdOutlineCall /></span>  0809 522 0213, 0803 305 3076</p>
                  <p> <span> <AiOutlineMail /> </span>uu81set@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">

                <div className="icon-wrapper">
                  <p>UU81 Bye Laws</p>
                  <p>Welfare Report</p>
                  <div className="icons d-flex justify-content-around align-items-center">
                    <TbWorld />
                    <FiTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-center mt-4">
            <p>Powered by Pioneer Industries Ltd</p>
          </div>
        </div>
    </>
  )
}

export default Footer