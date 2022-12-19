import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css';
import App from './App';
// import Home from './Components/Public/Home';
import Login from './Components/Public/Login';
// import ExamplesNavbar from './Components/Public/ExamplesNavbar';
// import LandingPageHeader from './Components/Public/LandingPageHeader';
import LandingPage from './Components/Public/LandingPage';
import AdminLayout from './Components/Admin/AdminLayout';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/paper-kit.css";
import "./assets/demo/demo.css";


import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from './Components/Admin/Dashboard';
import Donors from './Components/Admin/Donors';
import Hospitals from './Components/Admin/Hospitals';
import CustomerSignup from './Components/Public/CustomerSignup';
import ExamplesNavbar from './Components/Public/ExamplesNavbar';
import CustomerLayout from './Components/Customer/CustomerLayout';
import CustomerHome from './Components/Customer/CustomerHome';
import CustomerProfile from './Components/Customer/CustomerProfile';
import Home from './Components/Public/Home';
import HospitalSignup from './Components/Public/HospitalSignup';
import ForgotPassword from './Components/Public/ForgotPassword';
import CustomerAppointment from './Components/Customer/CustomerAppointment';
import CustomerRequests from './Components/Customer/CustomerRequests';
import About from './Components/Public/About';
import HospitalLayout from './Components/Hospital/HospitalLayout';
import HospitalHome from './Components/Hospital/HospitalHome';
import HospitalProfile from './Components/Hospital/HospitalProfile';
import HospitalRequest from './Components/Hospital/HospitalRequest';


const router = createBrowserRouter([
  { path: "/", element:<div><LandingPage/></div>,children:[
    {path: '/', element: <Home/>},
    {path: '/login', element: <Login/>},
    {path: '/forgot-password', element: <ForgotPassword/>},

  ]},

  { path: "/customerSignup", element:<div><ExamplesNavbar/><CustomerSignup/></div>},
  { path: "/HospitalSignup", element:<div><ExamplesNavbar/><HospitalSignup/></div>},
  { path: "/forgot-password", element:<div><ExamplesNavbar/><HospitalSignup/></div>},
  {path: '/admin', element: <AdminLayout/>, children:[
    {path: '/admin', element: <Dashboard/>},
    {path: '/admin/donors', element: <Donors/>},
    {path: '/admin/hospital', element: <Hospitals/>},
  ]},
  {path: '/customer', element: <CustomerLayout/>, children:[
    {path: '/customer', element: <CustomerHome/>},
    {path: '/customer/profile', element: <CustomerProfile/>},
    {path: '/customer/appointment', element: <CustomerAppointment/>},
    {path: '/customer/purchase', element: <CustomerRequests/>},
    {path: '/customer/about', element: <About/>}

  ]},
  {path: '/hospital', element: <HospitalLayout/>, children:[
    {path: '/hospital', element: <HospitalHome/>},
    {path: '/hospital/profile', element: <HospitalProfile/>},
    {path: '/hospital/purchase', element: <HospitalRequest/>},
  ]},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
