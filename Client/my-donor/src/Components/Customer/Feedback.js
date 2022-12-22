import { Formik, Field, ErrorMessage,Form  } from "formik";

import {React,useState,useEffect} from "react";
import { feedbackCustomerPost } from "../../api/customerApi";

import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

function Feedback() {
    const [hasUpdate, setHasUpdate] = useState(false);
  useEffect(() => {}, []);
  return (
    <div>
         <Formik
                initialValues={{description:"",name:"",date:""}}
                onSubmit={ (values, { setSubmitting }) => {

                    feedbackCustomerPost(values).then(data=>console.log(console.log("signupdata data",data)));
                    console.log(values)
                     setHasUpdate(true);
                      setSubmitting(false);

                  }}

              >
                {({ isSubmitting }) => (
          <Form>
          <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center">Submit Your Feedback</h2>
                <Row>
                  <Col md="6">
                    <label>Name</label>
                    <Field name="fullName"  type="text" className="border rounded shadow-md w-full py-2 focus:outline-blue-600"/>
                            <ErrorMessage name="FullName" className="text-red-600" component="div"/>
                  </Col>
                  <Col md="6">
                    <label>Date</label>
                    <Field name="date" type="date" className="border rounded shadow-md w-full py-2 focus:outline-blue-600"/>
                            <ErrorMessage name="date" className="text-red-600" component="div"/>
                  </Col>
                </Row>
                <label>Message</label>
                <Field as="textarea" name="description"   className="border rounded shadow-md w-full py-2 focus:outline-blue-600"/>
                            <ErrorMessage name="description" className="text-red-600" component="div"/>
                <Row>
                  <Col className="ml-auto mr-auto" md="4">
                    <Button type="submit" className="btn-fill" color="danger" size="lg">
                      Send Your Feedback
                    </Button>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>

                  </Form>
                )}

</Formik>
    </div>
  )
}

export default Feedback