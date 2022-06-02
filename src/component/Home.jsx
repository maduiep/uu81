import {useEffect} from 'react'
import Preloader from './Preloader';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../app/counterSlice';

// import { toggle } from '../app/loader';
// import { getItems } from '../app/authSlice';
import { axiosGet } from '../api/axios';
import Layout from './Layout';

const Home = () => {
    // const count = useSelector((state) => state.counter.value);
    // const loading = useSelector((state) => state.loading.value);
    const { isLoading} = useSelector((state)=> state.auth)
    // const dispatch = useDispatch()


    useEffect(()=>{
        GetEvents();
    },[])
    const GetEvents = async ()=>{
        
        const payload={
            limit:10,
            skip:0
        }
        const res = await axiosGet('/events',payload);
        console.log(res);
    }
  return (
      <>
        <Preloader loading={isLoading}/>
        <Layout />
      </>
  )
}

export default Home