import React from 'react'
import { Outlet } from 'react-router-dom';
// import Login from './component/Auth/Login';
import { useSelector } from 'react-redux';
// import ls from 'localstorage-slim';
import { Navigate } from "react-router-dom";

const useAuth = () => {
    const { isLoggedIn } = useSelector((state)=> state.auth)
    console.log(isLoggedIn)
    const user = {
        isLoggedIn
    }
    return user && user.isLoggedIn;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return  isAuth ? <Outlet/> : <Navigate to="/login" replace={true} />
}

export default ProtectedRoutes