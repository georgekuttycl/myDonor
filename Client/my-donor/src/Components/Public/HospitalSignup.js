import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {hospitalRegister} from '../../api/accountsApi';
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { checkOtp } from "../../api/accountsApi";

function HospitalSignup() {

  let navigate = useNavigate();
  const [visible, setVisible] = React.useState(true);
  const [data, setData] = React.useState({});
  const [otp, setOtp] = React.useState(null);
  const [errors, setErrors] = useState(null);

  function renderErrors(v, i){
    return <p key={i}>{v.msg}</p>
  }

  function verifyOtp(){
    const obj = {
      email: data.email,
      otp: document.getElementsByName('otp')[0].value
    }
    console.log(obj)
    checkOtp(obj).then(res=>{
      console.log(res)
    });


  }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

      <Formik
       initialValues={{ email: "", password: "", confirmPassword: "", name: "", address: "", phone: "", state: "", pincode: "", licenseNumber: "", otp: "", category: "" }}
       validationSchema={Yup.object({
        //  name: Yup.string().min(2).max(50).required("Required"),
        //  email: Yup.string().email('please enter valid email').required("Required"),
        //  address: Yup.string().required("Required"),
        //  phone: Yup.string().min(10).required("Required"),
        //  state: Yup.string().required("Required"),
        //  pincode: Yup.string().min(6).required("Required"),
        //  licenseNumber: Yup.string().min(8).max(16).required("Required"),
        //  password: Yup.string().min(6).max(20).required('Required'),
        //  confirmPassword: Yup.string().min(6).max(20).required('Required')
        //  .oneOf([Yup.ref('password'), null], 'Password must match')
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setData(values);
         const res = await hospitalRegister(values);
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
                <div
                  className="w-full xl:w-3/4 lg:w-11/12 flex"
                  style={{ display: visible ? "display" : "none" }}
                >
                  <div
                    className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                    style={{
                      backgroundImage: `url('https://img.freepik.com/premium-photo/close-up-patient-with-tubes-her-arm-squeezing-ball-her-hand-while-donating-blood_249974-4241.jpg?w=900')`,
                    }}
                  ></div>
                  <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h3 className="pt-4 text-2xl text-center">
                      Register Your Hospital
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="col-span-2">
                        <label>Name</label>
                        <Field
                          name="name"
                          type="text"
                          className="border rounded shadow-md py-2 focus:outline-blue-600"
                        />
                        <ErrorMessage
                          name="name"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Phone</label>
                        <Field
                          name="phone"
                          type="number"
                          className="border rounded shadow-md py-2"
                        />
                        <ErrorMessage
                          name="phone"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Category</label>
                        <Field as="select"
                          name="category"
                          type="text"
                          className="border rounded shadow-md py-2"
                        >
                          <option defaultChecked>Choose..</option>
                          <option value="private">Private</option>
                          <option value="government">Government</option>
                        </Field>
                        <ErrorMessage
                          name="category"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2 my-2">
                        <label>Address</label>

                        <Field as="textarea"
                          className="border rounded shadow-md"
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
                          className="border rounded shadow-md py-2"
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
                          className="border rounded shadow-md py-2"
                        />
                        <ErrorMessage
                          name="pincode"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2">
                        <label>License Number</label>
                        <Field
                          name="licenseNumber"
                          type="text"
                          className="border rounded shadow-md py-2"
                        />
                        <ErrorMessage
                          name="licenseNumber"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2">
                        <label>Email</label>
                        <Field
                          name="email"
                          type="text"
                          className="border rounded shadow-md py-2"
                        />
                        <ErrorMessage
                          name="email"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Password</label>
                        <Field
                          name="password"
                          type="password"
                          className="border rounded shadow-md py-2"
                        />
                        <ErrorMessage
                          name="password"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Confirm password</label>
                        <Field
                          name="confirmPassword"
                          type="password"
                          className="border rounded shadow-md py-2"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2">
                        <button
                          type="submit"
                          className="bg-red-600 text-white rounded-md p-2 mt-2 hover:bg-red-800 transition w-full">
                          {visible ? '' : 'Show'} Register
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
              </div>
            </div>
            <div
              style={{ display: !visible ? "block" : "none" }}
              className="ml-96 rounded shadow-lg p-5 w-1/3"
            >
              <div
                class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert"
              >
                <span class="font-medium">Enter Otp!</span> Please enter your
                Otp.
              </div>
              <div className="grid">
                <label>Enter Otp</label>
                <Field type="number" name="otp" className="rounded border py-2" value={otp} onChange={(e)=>setOtp(e.target.value)}/>
                <ErrorMessage
                  name="otp"
                  component="div"
                  className="text-red-600 mt-2"
                />
              </div>
              <div className="mt-4 grid">
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

export default HospitalSignup;
