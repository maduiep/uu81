import React,{ useState, useEffect,useCallback} from 'react'
import { Login as LoginRequest } from '../../app/authSlice';

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs';

const Login = () => {

    const [username,setusername] = useState();
    const [password,setpassword] = useState();

    const dispatch = useDispatch()
    const Handlesubmit =  async (e) => {
        e.preventDefault();
        const payload = {
            username,
            password
        }

        dispatch(LoginRequest(payload));
    }
    // const Handlesubmit = async (e)=>{
    //     e.preventDefault();

    //     const payload = {
    //         username,
    //         password
    //     }
    //     try {
    //         const response = await axios({
    //             baseURL:'https://uu81.herokuapp.com',
    //             method: 'POST',
    //             headers: {
    //                 'accept': 'application/json',
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             },
    //             // params: payload,
    //             data: qs.stringify(payload),
    //             url:'/login',
    //         });
    //         response.then( (response) => {
    //             console.log(    response);
    //         })
    //     } catch (error) {
    //         // .catch( (error) => console.log(error))
    //         console.log(error);
    //     }
    // }
    const handleEmail = (e)=>{
        setusername(e.target.value)
    }
    const handlePassword = (e)=>{
        setpassword(e.target.value)
    }
  return (
    // <div className=''>
    //     <div className="container">
    //         <div className="login_container">
    //             <div className="login_card">
    //                 <div className="form-container">
    //                     <form>
    //                         <p>
    //                             <input type="text"  placeholder="Username" name="Username" id="Username" onChange={handleEmail}/>
    //                         </p>
    //                         <p>
    //                             <input type="text"  placeholder="Password" name="Password" id="Password" onChange={handlePassword}/>
    //                         </p>
    //                         <p>
    //                             <button type="submit" onClick={Handlesubmit}>submit</button>
    //                         </p>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <>
        <div className="container">
           <h3 className='mt-4'> Enter Credentials</h3>
            <form className='d-flex justify-content-center flex-column mt-4'>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                &nbsp;
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                &nbsp;
            
                <small id="emailHelp" class="form-text text-muted color">Forgot Password?</small>
                <button type="submit" className="btn btn-primary mt-4 mb-4">Submit</button>
            </form>
        </div>
    </>
  )
}

export default Login