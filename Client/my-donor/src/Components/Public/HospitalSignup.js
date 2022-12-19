import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function HospitalSignup() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://img.freepik.com/premium-photo/close-up-patient-with-tubes-her-arm-squeezing-ball-her-hand-while-donating-blood_249974-4241.jpg?w=900')`,
              }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                  fullName: Yup.string().min(2).max(25).required(),
                  // email: Yup.string().email().min(2).max(25).required(),
                  // age: Yup.number().moreThan(18).lessThan(60).required(),
                  // gender: Yup.required(),
                  // age: Yup.string().required(),
                  // weight: Yup.number().moreThan(50).lessThan(150).required()
                })}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
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
                        <select
                          name="category"
                          type="text"
                          className="border rounded shadow-md py-2"
                        >
                          <option defaultChecked>Choose..</option>
                          <option value="private">Private</option>
                          <option value="government">Government</option>
                        </select>
                        <ErrorMessage
                          name="phone"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2 my-2">
                        <label>Address</label>

                        <textarea
                          className="border rounded shadow-md"
                          id="address"
                          name="address"
                          rows="4"
                        ></textarea>
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
                      <div className="col-span-2">
                        <button
                          type="submit"
                          className="bg-red-600 text-white rounded-md p-2 mt-2 hover:bg-red-800 transition w-full"
                        >
                          Register
                        </button>
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

export default HospitalSignup;
