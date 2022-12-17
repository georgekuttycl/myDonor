import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './Components/Public/Home';
import Login from './Components/Public/Login';
// import ExamplesNavbar from './Components/Public/ExamplesNavbar';
// import LandingPageHeader from './Components/Public/LandingPageHeader';
import LandingPage from './Components/Public/LandingPage';
import AdminLayout from './Components/Admin/AdminLayout';
import reportWebVitals from './reportWebVitals';


import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from './Components/Admin/Dashboard';
import Donors from './Components/Admin/Donors';
import Hospitals from './Components/Admin/Hospitals';


const router = createBrowserRouter([
  { path: "/", element:<div><LandingPage/></div>},
  { path: "/customerRegister", element:<div><App/><Login/></div>},
  {path: '/admin', element: <AdminLayout/>, children:[
    {path: '/admin', element: <Dashboard/>},
    {path: '/admin/donors', element: <Donors/>},
    {path: '/admin/hospital', element: <Hospitals/>},
  ]}
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
