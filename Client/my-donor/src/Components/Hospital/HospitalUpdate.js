import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { updateHospitalPost, updateHospital } from "../../api/hospitalApi";

const signUpSchema = Yup.object({
  fullName: Yup.string().min(2).max(25).required(),
  licenseNumber: Yup.number().required(),
  state: Yup.string().required(),
  pincode: Yup.number().required(),
  email: Yup.string().required(),
  phone: Yup.string().min(10).max(10).required(),
  password: Yup.string().min(4).required(),
});

function HospitalUpdate() {
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    updateHospital().then((result) => {
      setData(result.data);
      setUser(result.data.User);
    });
  }, []);

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
              <h3 className="pt-4 text-2xl text-center">
                Update Your Profile!
              </h3>
              <Formik
                initialValues={{
                  fullName: data.name,
                  phone: data.phone,
                  state: data.state,
                  licenseNumber: data.licenseNumber,
                  pincode: data.pin,
                  address: data.address,
                  email: user.email,
                  password: user.password,
                }}
                validationSchema={signUpSchema}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  updateHospitalPost(values).then((data) =>
                    console.log(console.log("signupdata data", data))
                  );
                  console.log(values);
                  setHasUpdate(true);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="col-span-2">
                        <label>Name</label>
                        <Field
                          name="fullName"
                          values={data.name}
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
                        <label>Phone</label>
                        <Field
                          name="phone"
                          values={data.phone}
                          type="number"
                          className="border rounded shadow-md w-full py-2"
                        />
                        <ErrorMessage
                          name="phone"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-1">
                        <label>Category</label>
                        <Field
                          as="select"
                          name="category"
                          type="text"
                          className="border rounded shadow-md py-2"
                        >
                          <option defaultChecked>Choose..</option>
                          <option value="private">Private</option>
                          <option value="government">Government</option>
                        </Field>
                        <ErrorMessage
                          name="phone"
                          className="text-red-600"
                          component="div"
                        />
                      </div>
                      <div className="col-span-2 my-2">
                        <label>Address</label>

                        <Field
                          as="textarea"
                          values={data.address}
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
                        <label>State</label>
                        <Field
                          name="state"
                          values={data.state}
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
                          initialvalues={data.pin}
                          type="text"
                          className="border rounded shadow-md w-full py-2"
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
                          initialValues={data.licenseNumber}
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
                        <button
                          type="submit"
                          className="bg-red-600 text-white rounded-md p-2 w-full w-full hover:bg-red-800 transition"
                        >
                          Update
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

export default HospitalUpdate;
