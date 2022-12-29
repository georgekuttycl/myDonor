import {React, useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup';
// import {login as loginService} from "../../Services/AuthService"
import {Link, Navigate, useNavigate} from "react-router-dom";
import './Login.css';
import {login} from "../../api/accountsApi";
import jwt_decode from "jwt-decode";



function Login() {

  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const [isActive, setActive] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
    setActive(!passwordShown);
  };
  async function checkLogin(values){
    var res = await login(values);
    if(!res.success){
      alert(res.errors[0]);
      return;
    }
    localStorage.setItem('token', res.data);
    console.log("Here", res);
    var res = jwt_decode(res.data);
    console.log(res);
    switch (res.role) {
      case 'customer':
        return navigate('/customer');
      case 'admin':
        return navigate('/admin');
      case 'hospital':
        return navigate('/hospital');
      default:
        break;
    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required.'),
    password: Yup.string().min(6).required('Password is required.'),
  });

  return (
    <div className='flex  mb-5 justify-center mt-32 animate__animated animate__fadeInUp'>
      <div className='rounded shadow-lg p-5 w-1/3 mt-10'>
        <h1 className='text-center text-red-600 text-3xl font-bold mb-3'>Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={checkLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='grid'>
                <label>Email</label>
                <Field type="email" name="email" className='rounded border py-2'/>
                <ErrorMessage name="email" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='grid'>
                <label>Password</label>
                <div className='flex'>
                <Field  name="password" className='rounded border py-2' type={passwordShown ? "text" : "password"}/>&nbsp;&nbsp;
               <a className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded' onClick={togglePassword}><i className={isActive ? 'fa-solid fa-eye':'fa-solid fa-eye-slash'} style={{color:'white'}} ></i></a>
                </div>
                <ErrorMessage name="password" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='mt-4 grid'>
                <button type="submit" className='bg-red-600 hover:bg-red-800 transition text-white rounded-md p-2'>
                  Submit
                </button>
              </div>
              <div className='flex justify-end'>
                <Link to={'/forgot-password'} className="text-blue-600 mt-1">
                  Forgot Password?
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login