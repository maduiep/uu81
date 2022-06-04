import React, { useEffect } from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './app/authSlice';
import Home from './component/Home';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import Layout from './component/Layout';
import DashLayout from './component/Dashboard/DashLayout';
import DashHome from './component/Dashboard/DashHome';
import Bookings from './component/Dashboard/Bookings';
import Payments from './component/Dashboard/Payments';
import Profile from './component/Dashboard/Profile';
import Event from './component/Event';
import Users from './component/Users/Users';
import User from './component/Users/User';

function App() {
    const { accessToken } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (accessToken !== undefined) {
            dispatch(authActions.logIn());
        } else {
            dispatch(authActions.logOut());
        }
        console.log(accessToken);
    }, [accessToken])

    return ( <
        Routes >
        <
        Route path = "/"
        element = { < Layout / > } >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/:id"
        element = { < Event / > }
        /> <
        Route path = "register"
        element = { < Register / > }
        /> <
        Route path = "login"
        element = { < Login / > }
        /> <
        /Route>

        <
        Route path = 'dashboard'
        element = { < DashLayout / > } >
        <
        Route path = "/dashboard"
        element = { < DashHome / > }
        /> <
        Route path = "bookings"
        element = { < Bookings / > }
        /> <
        Route path = "bookings/:id"
        element = { < Bookings / > }
        /> <
        Route path = "payments"
        element = { < Payments / > }
        /> <
        Route path = "payments"
        element = { < Profile / > }
        /> <
        Route path = "users"
        element = { < Users / > }
        /> <
        Route path = "users/:id"
        element = { < User / > }
        /> <
        /Route> <
        /Routes>
    );
}

export default App;