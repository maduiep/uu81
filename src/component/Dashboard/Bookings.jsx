import React from 'react'
import DataTable from './DataTable'


const Bookings = () => {
  return (
    <>
      <div className="container">
        <div className="booking-wrapper d-flex justify-content-center  flex-column">
        &nbsp;
        <h3>Bookings</h3>
        &nbsp;
        <DataTable />
        &nbsp;
        </div>
      </div>
    </>
  )
}

export default Bookings