import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";
import CustomerLandingPageHeader from "./CustomerLandingPageHeader";
import Feedback from "./Feedback";

function CustomerHome() {
  return (
    <div>
     <CustomerLandingPageHeader />
      <div>
        <div className="flex flex-wrap justify-around p-4 mt-4" >
          <Container>
            <Row>
              <Col className="w-1/5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">

                          Hospitals
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          334
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                          <i className="fas fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-emerald-500 mr-2">
                        <i className="fas fa-arrow-up"></i> 2,99%{" "}
                      </span>
                      <span className="whitespace-nowrap"> Since last month </span>
                    </p>
                  </div>
                </div>
              </Col>

              <Col className="w-1/5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Donors
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          2,999
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-red-500 mr-2">
                        <i className="fas fa-arrow-down"></i> 4,01%
                      </span>
                      <span className="whitespace-nowrap"> Since last week </span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="w-1/5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">

                          Hospitals
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          334
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                          <i className="fas fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-emerald-500 mr-2">
                        <i className="fas fa-arrow-up"></i> 2,99%{" "}
                      </span>
                      <span className="whitespace-nowrap"> Since last month </span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="w-1/5">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                          Donors
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          2,999
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-red-500 mr-2">
                        <i className="fas fa-arrow-down"></i> 4,01%
                      </span>
                      <span className="whitespace-nowrap"> Since last week </span>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
                  <Table striped style={{ backgroundColor: 'white' }}>
                    <thead>
                      <tr style={{ backgroundColor: 'purple' }}>
                        <th colSpan={4}>Table</th>
                      </tr>
                      <tr>
                        <th>SL No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Feedback/>
    </div>

  )
}

export default CustomerHome