import * as React from "react";
import { Formik, Form, Field, ErrorMessage,  } from "formik";
import * as Yup from  "yup";
import {useState,useEffect} from 'react';
 import { updateCustomerPost,updateCustomer } from "../../api/customerApi";
 import { useNavigate } from "react-router-dom";


 const signUpSchema = Yup.object({
  fullName:Yup.string().min(2).max(25).required(),
  weight: Yup.number().required(),
  age: Yup.number().required(),
  state:Yup.string().required(),
  pincode:Yup.number().required(),
  email:Yup.string().required(),
  password:Yup.string().required(),
  phone:Yup.string().min(10).max(10).required(),
  password:Yup.string().min(4).required()

})

function CustomerUpdate() {
  let navigate = useNavigate();
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const [hasUpdate, setHasUpdate] = useState(false);
    const [isActive, setIsActive] = useState(true);

  useEffect(() => {
      updateCustomer()
      .then((result) => {
          setData(result.data)
          setUser(result.data.User)
      });
  }, []);


  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
    <div  className={isActive ? 'container mx-auto animate__animated animate__fadeInLeft' : 'container mx-auto animate__animated animate__fadeOutRight'}>
      {/* <div className="container mx-auto animate__animated animate__fadeInLeft"> */}
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://img.freepik.com/premium-photo/close-up-patient-with-tubes-her-arm-squeezing-ball-her-hand-while-donating-blood_249974-4241.jpg?w=900')`,
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Update Your Profile!</h3>
              <Formik
                initialValues={{
                  fullName:data.name,
                  phone:data.phone,
                  state:data.state,
                  gender:data.gender,
                  weight:data.weight,
                  age:data.age,
                  pincode:data.pin,
                  address:data.address,
                  email:user.email,
                  password:user.password}}
                validationSchema={signUpSchema}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                    updateCustomerPost(values).then(data=>{
                      console.log("asdas", data.data);
                      setHasUpdate(true);
                      setSubmitting(false);

                      if(data.data.success){
                        alert('Data updated successfully.');
                        navigate("/customer/profile");

                      }
                    })
                  }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="col-span-2">
                            <label>Name</label>
                            <Field name="fullName" values={data.name} type="text" className="border rounded shadow-md w-full py-2 focus:outline-blue-600"/>
                            <ErrorMessage name="fullName" className="text-red-600" component="div"/>
                        </div>

                        <div className="col-span-1">
                            <label>Phone</label>
                            <Field name="phone" values={data.phone} type="number" className="border rounded shadow-md w-full py-2"/>
                            <ErrorMessage name="phone" className="text-red-600" component="div"/>
                        </div>
                        <div className="col-span-1">
                        <label>Gender</label>
                        <Field as="select"
                          name="gender"
                          type="text"
                          className="border rounded shadow-md py-2"
                          values={data.gender}
                        >
                          <option defaultChecked>Choose..</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </Field>
                        <ErrorMessage
                          name="phone"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2 my-2">
                        <label>Address</label>

                        <Field as="textarea" values={data.address}
                        className="border rounded shadow-md py-2"
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
                            <label>Age</label>
                            <Field name="age" values={data.age} type="text" className="border rounded shadow-md w-full py-2"/>
                            <ErrorMessage name="age" className="text-red-600" component="div"/>
                        </div>

                        <div className="col-span-1">
                            <label>State</label>
                            <Field name="state" values={data.state} type="text" className="border rounded shadow-md w-full py-2"/>
                            <ErrorMessage name="state" className="text-red-600" component="div"/>
                        </div>
                        <div className="col-span-1">
                            <label>Pincode</label>
                            <Field name="pincode" initialvalues={data.pin} type="text" className="border rounded shadow-md w-full py-2"/>
                            <ErrorMessage name="pincode" className="text-red-600" component="div"/>
                        </div>
                        <div className="col-span-2">
                        <label>Weight</label>
                        <Field
                          name="weight"
                          initialValues={data.weight}
                          type="text"
                          className="border rounded shadow-md py-2"
                        />
                        <ErrorMessage
                          name="weight"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                       <div className="col-span-2">
                        <label>Email</label>
                        <Field
                          name="email"
                          value={user.email}
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
                          value={user.password}
                          className="border rounded shadow-md py-2"
                        />
                        <ErrorMessage
                          name="state"
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
                          name="pincode"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                        <div className="col-span-2 mt-4">
                            <button type="submit" className="bg-red-600 text-white rounded-md p-2 w-full hover:bg-red-800 transition" onClick={handleClick}>Update</button>
                        </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerUpdate;