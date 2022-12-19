import React from 'react'
import { Outlet } from 'react-router-dom'
import DemoFooter from '../Public/DemoFooter'
import CustomerNavbar from './CustomerNavbar'

function CustomerLayout() {
  return (
    <div  style={{height: '100vh',marginTop:'10em'}}>
        <CustomerNavbar/>
        <div>
        <Outlet/>
        </div>
        <DemoFooter/>
    </div>
  )
}

export default CustomerLayout