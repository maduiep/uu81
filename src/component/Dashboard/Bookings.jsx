import React from 'react'
import { DataTable } from './DataTable'

const Bookings = () => {
  return (
    <>
      <div className="container">
        <div className="booking-wrapper d-flex justify-content-center">
        <h1>Bookings</h1>
        <DataTable />
        </div>
      </div>
    </>
  )
}

export default Bookings