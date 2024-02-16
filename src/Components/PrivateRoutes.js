import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom';

const PrivateRoutes = () => {

    const {user} = useSelector((state)=>state.user);

    if(!user || localStorage.getItem("token") === null){
        return <Navigate to={"/"} replace/>
    } else {
        return <Outlet />
    }
}

export default PrivateRoutes