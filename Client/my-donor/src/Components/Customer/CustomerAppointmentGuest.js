import {React} from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup';
import { guestAppointment } from '../../api/customerApi';

function CustomerAppointmentGuest() {
  return (
    <div className='flex mb-5 justify-center mt-32'>
      <div className='rounded shadow-lg p-5 w-1/3'>
        <h1 className='text-center text-red-600 text-3xl mb-3'>Book for your Favourite?</h1>
        <Formik
          initialValues={{ name: '', bloodgroup: '', weight: '', address: '', relation: '' }}
          validationSchema={Yup.object({
            // email: Yup.string().email('Invalid email').required('Email is required.'),
            // password: Yup.string().min(6).required('Password is required.'),
          })}
          onSubmit={async(values, { setSubmitting }) => {
            var res = await guestAppointment(values);
            console.log(values);
            console.log(res);
            if(!res.data.success){
              alert(res.data.errors[0]);
            }
            else{
              alert("Your donation has be marked.")
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className='grid'>
                <label>Name</label>
                <Field type="text" name="name" className='rounded border py-2'/>
                <ErrorMessage name='name' component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='grid'>
                <label>Blood Group</label>
                <Field as="select" name="bloodgroup" className='rounded border py-2'>
                    <option defaultChecked="Choose.."></option>
                    <option value="O-ve">O-ve</option>
                    <option value="O+ve">O+ve</option>
                </Field>
                {/* <select name="bloodgroup" className='rounded border py-2'>

                </select> */}
                <ErrorMessage name="bloodgroup" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='grid'>
                <label>Weight</label>
                <Field type="text" name="weight" className='rounded border py-2'/>
                <ErrorMessage name="weight" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='grid'>
                <label>Address</label>
                <Field as="textarea"
                          className="border rounded shadow-md w-full"
                          id="address"
                          name="address"
                          rows="4"
                        ></Field>
                <ErrorMessage name="address" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='grid'>
                <label>Relation</label>
                <Field type="text" name="relation" className='rounded border py-2'/>
                <ErrorMessage name="relation" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='mt-4 grid'>
                <button type="submit" className='bg-red-600 hover:bg-red-800 transition text-white rounded-md p-2'>
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

export default CustomerAppointmentGuest