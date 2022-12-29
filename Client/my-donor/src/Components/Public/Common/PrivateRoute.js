import {React, useState} from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {
    const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
        {isLoggedIn? <Outlet/>: <Navigate to={'/'}/>}
    </>
  )
}

export default PrivateRoute