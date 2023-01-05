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
  const [errors, setErrors] = useState(null);

  function renderErrors(v, i){
    return <p key={i}>{v.msg}</p>
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
              <Formik
                initialValues={{ email: "", password: "",state:"",fullName:"",gender:"",phone:"",age:'',weight:"",address:"",pincode:"",confirmPassword:""}}
                validationSchema={Yup.object({
                  fullName: Yup.string().min(2).max(50).required("required"),
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
                  const res = await customerRegister(values);
                  console.log(res);
                  if(!res.success){
                    setErrors(res.errors);
                  }
                  else{
                    setVisible(!visible);
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>

      <div className="container mx-auto animate__animated animate__fadeInUp">
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
                          type="text"
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
                          <option value="male">Male</option>
                          <option value="female">Female</option>

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
                          <option value="A+">A+</option>
                          <option value="A-ve">A-ve</option>
                          <option value="O+ve">O+ve</option>
                          <option value="B+ve">B+ve</option>
                          <option value="B-ve">B-ve</option>
                          <option value="O-ve">O-ve</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-ve">AB-ve</option>
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
                          type="password"
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
                          type="password"
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
                          className="bg-red-600 text-white rounded-md p-2 w-full hover:bg-red-800 transition">{visible ? '' : 'Show'}

                          Register
                        </button>
                      </div>
               <div className='col-span-2 '>
               <div className='flex flex-row p-2 bg-yellow-900'>
               <svg class=" w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path> </svg>
               <p className='text-white'> Alert !</p>
               </div>
               <div className="col-span-2 p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                {errors && errors.map(renderErrors)}
              </div>
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
                    alert("Otp Verified")
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
