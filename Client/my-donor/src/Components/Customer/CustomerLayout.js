import {React, useState, useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import DemoFooter from '../Public/DemoFooter'
import CustomerNavbar from './CustomerNavbar'
import jwt_decode from 'jwt-decode';

function CustomerLayout() {
  const [isCustomer, setIsCustomer] = useState(true);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token){
            setIsCustomer(false);
            return;
        }

        var decodedToken = jwt_decode(token);
        console.log(decodedToken);
        if(decodedToken.role !== 'customer'){
            setIsCustomer(false);
        }
    }, [])
  return (
    <div  style={{height: '100vh'}}>
        <CustomerNavbar/>
        <div>
          {isCustomer?<Outlet/>:<Navigate to={'/'}/>}
        </div>
        <DemoFooter/>
    </div>
  )
}

export default CustomerLayout