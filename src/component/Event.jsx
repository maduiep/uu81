import React from 'react'

const Event = () => {

  const lineStyle = {
    width: '7rem',
    height: '1px',
    backgroundColor: 'gray'
  }
  return (
   <div className="container mt-4">
     <div className="content-wrapper d-flex justify-content-evenly">
      <div className="date">
        <h4>25</h4>
        <span>Nov</span>
        <hr width='50'/>

      </div>
      <div className="jumbotron">
      <div class="card mb-3 w-53">
        <img className='card-img-top' src="/assets/card-img.jpg" alt="" height="200"/>
        <div className="card-body">
          <h5 className="card-title">Yenagoa 2021 | 2 - 2021</h5>
          <p className="card-text">Venue: Dr Goodluck Ebele Jonathan, Yenagoa | November 25 - November 28 | ₦0.00 | 120 spaces</p>
          <p className="card-text"><small className="text-muted">Reunion of 1981 Set</small></p>
        </div>
      </div>
      </div>
      <div className="venue d-flex flex-column">
        <div className='line-holder d-flex justify-content-around align-items-center'>
          <div style={lineStyle}></div>
          <h5>Venue</h5>
          <div style={lineStyle}></div>
        </div>

        <div className="all-venue">
          <h6>All Venues</h6>
          <hr />
          <h6>Dr Goodluck Ebele Jonathan, Yenagoa (1)</h6>
          <hr />
        </div>

        <div className='line-holder d-flex justify-content-around align-items-center'>
          <div style={lineStyle}></div>
          <h6>Activities</h6>
          <div style={lineStyle}></div>
        </div>

        <div className="all-venue">
          <h6>All Activities</h6>
          <hr />
          <h6>Reunion(1)</h6>
          <hr />
          <h6>Workshop (1)</h6>
          <hr />
        </div>

        <div className='line-holder d-flex justify-content-around align-items-center'>
          <div style={lineStyle}></div>
          <h6>FOLLOW US</h6>
          <div style={lineStyle}></div>
        </div>
      </div>
     </div>
   </div>
  )
}

export default Event