import {React, useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup';
import {Link, useNavigate} from "react-router-dom";
import { customerAppointment } from '../../api/customerApi';

function CustomerAppointment() {
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  function checkNavigate(e){
    if(e.target.value != "myself"){
      navigate('/customer/appointment-guest');
    }
  }
  return (

        <Formik
          initialValues={{ email: '', name: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required.'),
            name: Yup.string().min(6).required('Password is required.'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            var res = await customerAppointment(values);
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
              <div className='flex mb-5 justify-center mt-32' >
      <div className='rounded shadow-lg p-5 w-1/3'>
        <h1 className='text-center text-red-600 text-3xl mb-3'>Want to Donate?</h1>
              <div className='grid'>
                <label>Name</label>
                <Field type="text" name="name" className='rounded border py-2'/>
                <ErrorMessage name="name" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='grid'>
                <label>Email</label>
                <Field type="email" name="email" className='rounded border py-2'/>
                <ErrorMessage name="email" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='grid'>
                <label>Book for</label>
                <select type="text" name="bookFor" className='rounded border py-2' onChange={checkNavigate}>
                    <option defaultChecked="">Choose</option>
                    <option value="myself">Myself</option>
                    <option value="friend"> <Link to={'/customer/customerAppointment'}>Friend </Link></option>
                  <Link to={'/customer/customerAppointment'}>   <option value="family">Family</option></Link>
                </select>
                <ErrorMessage name="bookFor" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='mt-4 grid'>
                <button type="submit"  className='bg-red-600 hover:bg-red-800 transition text-white rounded-md p-2' >
                  Book
                </button>
              </div>
              </div>
              </div>

            </Form>
          )}
        </Formik>

  )
}

export default CustomerAppointment