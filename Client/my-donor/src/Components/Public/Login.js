import {React, useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup';
// import {login as loginService} from "../../Services/AuthService"
import {Navigate} from "react-router-dom";
import './Login.css';


function Login() {
    const [hasLoggedIn, setHasLoggedIn] = useState(false);
  return (

    <div className='container' style={{position:"relative",top:"10em"}}>
      <br></br>
        {/* <h1 className='text-center'>Login</h1> */}

        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={
                Yup.object().shape({
                    email: Yup.string().email().required('Email is required.'),
                    password: Yup.string().required('Password is required.')
                })
            }
            // onSubmit={async (values, { setSubmitting }) => {
            //     var res = await loginService(values);
            //     localStorage.setItem('token', res.data);
            //     setSubmitting(false);
            //     setHasLoggedIn(true);
            // }}
            >
            {({ isSubmitting }) => (
                <Form>
                    {/* <div className='main'>
                        <label>Email</label>
                        <Field type="email" name="email" className='form-control'/>
                        <ErrorMessage name="email" component="div"  className='text-danger'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field type="password" name="password" className='form-control'/>
                        <ErrorMessage name="password" component="div" className='text-danger'/>
                    </div>
                    <button type="submit" disabled={isSubmitting} className='btn btn-primary mt-2'>
                        Submit
                    </button>
                    {hasLoggedIn && <Navigate to='/user'/>} */
                    <div class="grid align__item">

                    <div class="register">

                      <svg xmlns="http://www.w3.org/2000/svg" class="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#FF4500"/><stop offset="100%" stop-color="#FF6347"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>

                      <h2>Sign Up</h2>

                      <div class="form">

                        <div class="form__field">
                          <input type="email" placeholder="info@mailaddress.com"/>
                          <ErrorMessage name="email" component="div"  className='text-danger'/>
                        </div>

                        <div class="form__field">
                          <input type="password" placeholder="••••••••••••"/>
                          <ErrorMessage name="password" component="div" className='text-danger'/>
                        </div>

                        <div class="form__field">
                          <input type="submit" value="Sign Up"/>
                        </div>

                      </div>

                      <p>Already have an accout? <a href="#">Log in</a></p>

                    </div>

                  </div>


                    }

                </Form>
            )}
     </Formik>
    </div>
  )
}

export default Login