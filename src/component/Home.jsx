/* eslint-disable no-unused-vars */
import {useEffect,useState} from 'react'
import Preloader from './Preloader';
import { useSelector, useDispatch } from 'react-redux';
import { axiosGet } from '../api/axios';
// import { decrement, increment } from '../app/counterSlice';

// import { toggle } from '../app/loader';
// import { getItems } from '../app/authSlice';
// import Layout from './Layout';
import Event from './Event';

const Home = () => {
    const [events, setEvents]= useState([]);
    // const count = useSelector((state) => state.counter.value);
    // const loading = useSelector((state) => state.loading.value);
    const { isLoading} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()



    const GetEvents = async ()=>{
        
        const payload = {
            limit:10,
            skip:0
        }
        const res = await axiosGet('/events/all',payload);
        const resData = res.data;
        setEvents(resData);
        console.log(resData);
    }

    useEffect(()=>{
        GetEvents();
    },[])

    return (
        <>
            <Preloader loading={isLoading}/>
            <Event data={events}/>
        </>
    )
}

export default Home