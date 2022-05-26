import {useEffect} from 'react'
import Preloader from './Preloader';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../app/counterSlice';
import Navbar from './Navbar';
// import { toggle } from '../app/loader';
// import { getItems } from '../app/authSlice';
import { axiosGet } from '../api/axios';

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
        <div class="breadcrumb-section breadcrumb-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2 text-center">
                        <div class="breadcrumb-text">
                            <p>Organic Information</p>
                            <h1>News Article</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="latest-news mt-150 mb-150">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        
                    </div>
                   
                </div>

                {/* <div class="row">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <div class="pagination-wrap">
                                    <ul>
                                        <li><a href="/">Prev</a></li>
                                        <li><a href="/">1</a></li>
                                        <li><a class="active" href="/">2</a></li>
                                        <li><a href="/">3</a></li>
                                        <li><a href="/">Next</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
      </>
  )
}

export default Home