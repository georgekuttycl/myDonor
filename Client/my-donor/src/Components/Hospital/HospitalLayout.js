import React from 'react'
import { Outlet } from 'react-router-dom'
import DemoFooter from '../Public/DemoFooter'
import HospitalNavbar from './HospitalNavbar'

function HospitalLayout() {
  return (
    <div  style={{height: '100vh'}}>
        <HospitalNavbar/>
        <div>
        <Outlet/>
        </div>
        <DemoFooter/>
    </div>
  )
}

export default HospitalLayout