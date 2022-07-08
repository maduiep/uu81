import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({data}) => {

  // const btnColor = {
  //   color: 'white'
  // }

  // const lineStyle = {
  //   width: '7rem',
  //   height: '1px',
  //   backgroundColor: 'gray'
  // }
  return (
   <div className="container my-5">
     <div className="row min-vh-100">
       <div className="col">
          <div className="row gx-5">
              {
                data && data.map((item,i)=>{
                  return (
                      <>
                      <div key={item.Event.id}  className="col-4">
                        <div  className="jumbotron mb-5">
                          <div className="card mb-3 w-53">
                            <img className='card-img-top' src={item.Event.image_url} alt="" height="200"/>
                            <div className="card-body">
                              <h5 className="card-title">{item.Event.title}</h5>
                              <p className="card-text">{item.Event.space_available} spaces</p>
                              <p className="card-text"><small className="text-muted">Reunion of 1981 Set</small></p>
                            </div>
                          </div>

                          <div className="btn-wrapper d-flex justify-content-end align-items-end">
                            {/* <button type="button" className="btn btn-info btn-lg">
                              View 
                            </button> */}
                            <Link to={`/event/${item.Event.id}`} className="btn btn-info btn-lg">View Details</Link>
                          </div>
                        </div>
                      </div>
                      
                      {/* <div key={i} className="col-lg-4">
                        <div className="card card-margin">
                            <div className="card-header no-border">
                                <h5 className="card-title">{item.Event.title}</h5>
                            </div>
                            <div className="card-body pt-0">
                                <div className="widget-49">
                                    <div className="widget-49-title-wrapper">
                                        <div className="widget-49-date-primary">
                                            <span className="widget-49-date-day">09</span>
                                            <span className="widget-49-date-month">{new Date(item.Event.created_at).toLocaleString("en-US", { month: "short" })}</span>
                                        </div>
                                        <div className="widget-49-meeting-info">
                                            <span className="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                                            <span className="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                                        </div>
                                    </div>
                                    {/* <ol className="widget-49-meeting-points">
                                        <li className="widget-49-meeting-item"><span>Expand module is removed</span></li>
                                        <li className="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                                        <li className="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                                    </ol> */}
                                    {/* <div className="widget-49-meeting-action">
                                        <Link to={`/event/${item.Event.id}`} className="btn btn-sm btn-flash-border-primary">View</Link>
                                    </div>
                                </div>
                            </div> */}
                        {/* </div> */}
                      {/* </div> */}
                      </>
                    )
                  }
                )
              }
          </div>
       </div>
     </div>
   </div>
  )
}

export default Event