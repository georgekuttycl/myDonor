import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Link} from "react-router-dom";
import * as Yup from 'yup';

function ForgotPassword() {
  return (
    <div className='flex mb-5 justify-center mt-32'>
      <div className='rounded shadow-lg p-5 w-1/3'>
        <h1 className='text-center text-red-600 text-3xl mb-3'>Forgot Password</h1>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required.'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='grid'>
                <label>Email</label>
                <Field type="email" name="email" className='rounded border py-2'/>
                <ErrorMessage name="email" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='py-2'>
                <p className='text-sm'>Enter your email to get a recovery email.</p>
              </div>
              <div className='mt-2 grid'>
                <button type="submit" disabled={isSubmitting} className='bg-red-600 hover:bg-red-800 transition text-white rounded-md p-2'>
                  Submit
                </button>
              </div>
              <div className='flex justify-end'>
                <Link to={'/login'} className="text-blue-600 mt-1">
                  Login now
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ForgotPassword