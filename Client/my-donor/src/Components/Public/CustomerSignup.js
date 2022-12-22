import React, { useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {checkOtp, login, customerRegister} from '../../api/accountsApi';
import { useNavigate } from 'react-router-dom';


function CustomerSignup() {
  let navigate = useNavigate();
  const [visible, setVisible] = React.useState(true);
  // const [show, hide] = React.useState(true);
  const [data, setData] = React.useState({});
  const [otp, setOtp] = React.useState(null);
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
              <Formik
                initialValues={{ email: "", password: "",state:"",fullName:"",gender:"",phone:"",age:'',weight:"",address:"",pincode:"",confirmPassword:""}}
                validationSchema={Yup.object({
                  fullName: Yup.string().min(2).max(25).required("required"),
                  email: Yup.string().email().min(2).max(50).required("required"),
                  phone:Yup.string().min(10).required("required"),
                  age: Yup.number().moreThan(18).lessThan(60).required("required"),
                  address: Yup.string().required("required"),
                  gender: Yup.string().required("required"),
                  state: Yup.string().required("required"),
                  pincode: Yup.string().min(6).required("required"),
                  weight: Yup.number().moreThan(50).lessThan(150).required("required"),
                  password: Yup.string().min(6).max(20).required('Required'),
                  confirmPassword: Yup.string().min(6).max(20).required('Required')
                  .oneOf([Yup.ref('password'), null], 'Password must match')
                })}
                onSubmit={async (values, { setSubmitting }) => {
                  setData(values);
                  await customerRegister(values);
                  console.log(values);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>

      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex" style={{display: visible ? 'display' : 'none'}}>
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://img.freepik.com/premium-photo/close-up-patient-with-tubes-her-arm-squeezing-ball-her-hand-while-donating-blood_249974-4241.jpg?w=900')`,
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Register Your Account</h3>
                    <div className= "grid grid-cols-2 gap-2">
                      <div className="col-span-2">
                        <label>Name</label>
                        <Field
                          name="fullName"
                          type="text"
                          className="border rounded shadow-md w-full py-2 focus:outline-blue-600"
                        />
                        <ErrorMessage
                          name="fullName"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Email</label>
                        <Field
                          name="email"
                          type="email"
                          className="border rounded shadow-md w-full py-2"
                        />
                        <ErrorMessage
                          name="email"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Phone</label>
                        <Field
                          name="phone"
                          type="number"
                          className="border rounded shadow-md w-full py-2"
                        />
                        <ErrorMessage
                          name="phone"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className='col-span-2'>
                      <label>Gender</label>
                      <Field as="select"

                          name="gender"

                          type="text"

                          className="border rounded shadow-md py-2 w-full"

                        >

                          <option defaultChecked>Choose</option>
                          <option value="male">male</option>
                          <option value="female">female</option>

                        </Field>
                        </div>
                      <div className="col-span-2 my-2">
                        <label>Blood Group</label>
                        <Field
                          as="select"
                          name="bloodGroup"
                          type="select"
                          className="border rounded shadow-md w-full py-2"
                        >
                          <option defaultValue>Choose...</option>
                          <option value="O+ve">O+ve</option>
                          <option value="O-ve">O-ve</option>
                          <option value="AB+">AB+</option>
                          <option value="Ab-ve">Ab-ve</option>
                        </Field>
                        <ErrorMessage
                          name="bloodGroup"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2">
                        <label>Weight</label>
                        <Field
                          name="weight"
                          type="text"
                          className="border rounded shadow-md w-full py-2"
                        />
                        <ErrorMessage
                          name="weight"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2">
                        <label>Age</label>
                        <Field
                          name="age"
                          type="text"
                          className="border rounded shadow-md w-full py-2"
                        />
                        <ErrorMessage
                          name="age"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2 my-2">
                        <label>Address</label>

                        <Field as="textarea"
                          className="border rounded shadow-md w-full"
                          id="address"
                          name="address"
                          rows="4"
                        ></Field>
                        <ErrorMessage
                          name="address"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>State</label>
                        <Field
                          name="state"
                          type="text"
                          className="border rounded shadow-md w-full py-2"
                        />
                        <ErrorMessage
                          name="state"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Pincode</label>
                        <Field
                          name="pincode"
                          type="text"
                          className="border rounded shadow-md w-full py-2"
                        />
                        <ErrorMessage
                          name="pincode"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Password</label>
                        <Field
                          name="password"
                          type="text"
                          className="border rounded shadow-md w-full py-2"
                        />
                        <ErrorMessage
                          name="password"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Confirm Password</label>
                        <Field
                          name="confirmPassword"
                          type="text"
                          className="border rounded shadow-md w-full py-2"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2 mt-4">
                        <button
                          type="submit"
                          className="bg-red-600 text-white rounded-md p-2 w-full hover:bg-red-800 transition"
                          onClick={() => setVisible(!visible)}>{visible ? '' : 'Show'}

                          Register
                        </button>
                      </div>
                    </div>
            </div>
          </div>


          {/* Otp form */}

          {/* otp form ends */}

        </div>

      </div>
      <div style={{display: !visible ? 'block' : 'none'}} className='ml-96 rounded shadow-lg p-5 w-1/3'>
          <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
          <span class="font-medium">Enter Otp!</span> Please enter your Otp.
          </div>
          <div className='grid'>
                <label>Enter Otp</label>
                <input type={'text'} name='otp' value={otp} onChange={(e)=>setOtp(e.target.value)}/>
                {/* <Field type="text" name="Otp" className='rounded border py-2'/> */}
                <ErrorMessage name="Otp" component="div" className='text-red-600 mt-2'/>
              </div>
              <div className='mt-4 grid'>
                <button type="button" className='bg-red-600 hover:bg-red-800 transition text-white rounded-md p-2' onClick={async(e)=>{
                  console.log(otp);
                  const dataToSend = {...data, otp:otp};
                  var res = await checkOtp(dataToSend);
                  if(res.success){
                    navigate("/");
                  }
                }}>
                  Check
                </button>
              </div>
          </div>
      </Form>
                )}

              </Formik>

    </div>
  );
}

export default CustomerSignup;
