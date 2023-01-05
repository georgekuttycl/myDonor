import React from 'react'
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

import HospitalFeedback from './HospitalFeedback';
import HospitalLandingPageHeader from './HospitalLandingPageHeader';
import { hospitalName,hospitalStats } from "../../api/hospitalApi";
import { useState,useEffect } from "react";

function HospitalHome() {
  const [stat, setStat] = useState({
    purchaseHistory: []
  });

  useEffect(() => {
   hospitalStats().then((data)=>{
    console.log(data);
    setStat(data);
   });

  }, []);

  const getRow = (data,index)=>{
    console.log(data)
    return (
        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.group}</td>
                        <td>{data.quantity}</td>
                        <td>{data.date}</td>
        </tr>
    )
}

  return (
    <div>
 <HospitalLandingPageHeader />
      <div>
        <div className="flex flex-wrap justify-around p-4" >
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
                          {stat.hospitalCount}
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
                          {stat.customerCount}
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

                          Stock Available
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          {stat.stockCount}
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
                          Purchase
                        </h5>
                        <span className="font-semibold text-xl text-blueGray-700">
                          {stat.purchaseNumber}
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
                        <th colSpan={4} style={{color:'white'}}>Purchase History</th>
                      </tr>
                      <tr>
                        <th>SL No.</th>
                        <th>Bloodgroup</th>
                        <th>Quantity</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                    {stat.purchaseHistory.map(getRow)}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <HospitalFeedback/>
    </div>
  )
}

export default HospitalHome