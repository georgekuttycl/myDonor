import {React} from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup';

function CustomerRequests() {
  return (
    <div className='flex mb-5 justify-center mt-32'>
    <div className='rounded shadow-lg p-5 w-1/3'>
      <h1 className='text-center text-red-600 text-3xl mb-3'>Want to Request Blood?</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Email is required.'),
          password: Yup.string().min(6).required('Password is required.'),
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
              <label>Choose Blood Group</label>
              <select type="text" name="email" className='rounded border py-2'>
                <option defaultValue="">Choose</option>
                <option Value="O+ve">O+ve</option>
                <option Value="O-ve">O-ve</option>
                <option Value="AB+ve">AB+ve</option>
                <option Value="AB-ve">AB-ve</option>
                <option Value="B+">B+</option>
              </select>
              <ErrorMessage name="name" component="div" className='text-red-600 mt-2'/>
            </div>
            <div className='grid'>
              <label>Quantity</label>
              <Field type="text" name="quantity" className='rounded border py-2'/>
              <ErrorMessage name="quantity" component="div" className='text-red-600 mt-2'/>
            </div>
            <div className='mt-4 grid'>
              <button type="submit" disabled={isSubmitting} className='bg-red-600 hover:bg-red-800 transition text-white rounded-md p-2'>
                Request
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
  )
}

export default CustomerRequests