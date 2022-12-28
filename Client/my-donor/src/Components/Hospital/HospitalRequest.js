import {React} from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup';
import { bloodRequest } from '../../api/hospitalApi';
import { useNavigate } from "react-router-dom";

function HospitalRequests() {
  let navigate = useNavigate();
  return (
    <div className='flex mb-5 justify-center mt-32'>
    <div className='rounded shadow-lg p-5 w-1/3'>
      <h1 className='text-center text-red-600 text-3xl mb-3'>Want to Request Blood?</h1>
      <Formik
        initialValues={{ group: '', quantity: '' }}

        onSubmit={async (values, { setSubmitting }) => {
          console.log('Here');
          const res = await bloodRequest(values);
          console.log(res);
          if(res.data.success){
            alert("Order placed successfully.");
            navigate('/hospital/payment');
          }
          else{
            alert(res.data.errors[0]);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='grid'>
              <label>Choose Blood Group</label>
              <Field as="select"  name="group" className='rounded border py-2'>
                <option defaultValue="">Choose</option>
                <option value="A+">A+</option>
                          <option value="A-ve">A-ve</option>
                          <option value="O+ve">O+ve</option>
                          <option value="B+ve">B+ve</option>
                          <option value="B-ve">B-ve</option>
                          <option value="O-ve">O-ve</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-ve">AB-ve</option>
              </Field>
              <ErrorMessage name="group" component="div" className='text-red-600 mt-2'/>
            </div>
            <div className='grid'>
              <label>Quantity</label>
              <Field type="text" name="quantity" className='rounded border py-2'/>
              <ErrorMessage name="quantity" component="div" className='text-red-600 mt-2'/>
            </div>
            <div className='mt-4 grid'>
              <button type="submit"  className='bg-red-600 hover:bg-red-800 transition text-white rounded-md p-2'>
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

export default HospitalRequests