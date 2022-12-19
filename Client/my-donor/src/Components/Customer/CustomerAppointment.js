import {React} from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup';
import {Link} from "react-router-dom";

function CustomerAppointment() {
  return (
    <div className='flex mb-5 justify-center mt-32'>
      <div className='rounded shadow-lg p-5 w-1/3'>
        <h1 className='text-center text-red-600 text-3xl mb-3'>Want to Donate?</h1>
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
                <label>Name</label>
                <Field type="text" name="email" className='rounded border py-2'/>
                <ErrorMessage name="name" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='grid'>
                <label>Email</label>
                <Field type="email" name="email" className='rounded border py-2'/>
                <ErrorMessage name="email" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='grid'>
                <label>Book for</label>
                <select type="text" name="bookFor" className='rounded border py-2'>
                    <option defaultChecked="">Choose</option>
                    <option value="myself">Myself</option>
                    <option value="friend">Friend</option>
                    <option value="family">Family</option>
                </select>
                <ErrorMessage name="bookFor" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='mt-4 grid'>
                <button type="submit" disabled={isSubmitting} className='bg-red-600 hover:bg-red-800 transition text-white rounded-md p-2'>
                  Book
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CustomerAppointment