import React, { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { axiosGet } from './../api/axios';

const SingleEvent = () => {

    const [event,setEvent]=useState();
    
    const {id}=useParams();

    useEffect(()=>{
        getEventById(id);
    },[id])
    
    useEffect(()=>{
        if(event){
            console.log(event);
        }
    },[event])

    const getEventById= async(id) => {
        const payload = {
            limit:10,
            skip:0
        }
        const response = await axiosGet.get('/events/'+id, payload )

        setEvent(response.data)
    }

  return (
    <div className=' min-vh-100 '>
        <div className="container">
            <div className="row p-5">
                <div className="col-md-4">
                    <h2 className="">SingleEvent</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleEvent