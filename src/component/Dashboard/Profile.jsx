import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Profile = () => {
  const lineStyle = {
    width: '15rem',
    height: '1px',
    backgroundColor: 'gray'
  }
  return (
   <>
    <div className="container">
      <div className="profile-wrapper-form d-flex justify-content-center flex-column mt-4">
        <h3>My Profile</h3>
        <div className="form-wrapper">
          <form action="" className='mt-4 mb-4'>
            <div class="form-group">
              <select class="form-control" id="exampleFormControlSelect1" placeholder='Role'>
                <option>Member</option>
                <option>Admin</option>
                <option>Visitor</option>
              </select>
            </div>

            <div className="row mt-3">
              <div class="col">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  />
              </div>
              <div class="col">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
            </div>

            <div class="row mt-3">
              <div class="col">
                <input type="text" class="form-control" placeholder="First name" />
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name" />
              </div>
            </div>

            <div className="row mt-3">
              <div class="col">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  />
              </div>
              <div class="col">
                <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Phone" />
              </div>
            </div>
          </form>

          <div className='line-holder d-flex justify-content-center align-items-center'>
            <div style={lineStyle}></div>
            <div className='d-flex align-items-center justify-content-center'>
              <h5 className='px-2'>More Details</h5>
              <IoIosArrowDown />
            </div>
            <div style={lineStyle}></div>
          </div>

      
        </div>
      </div>
    </div>
   </>
  )
}

export default Profile