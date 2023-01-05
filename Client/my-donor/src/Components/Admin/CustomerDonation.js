import React from "react";
import { useEffect, useState } from "react";
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
import { approveAppointment, getAllAppointments } from "../Services/AdminService";

function CustomerDonation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllAppointments().then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  async function markCollected(e){
    let id = e.target.getAttribute('data-id');
    var res = await approveAppointment(id);
    e.target.remove();
  }

  function getRow(item, index) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.bloodGroup}</td>
        <td>
          {item.status === "collected"?<span className="border border-red-500 bg-red-500 text-white rounded-md px-2 py-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline">Collected</span>:<button className="border border-red-500 bg-green-500 text-white rounded-md px-2 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" data-id={item.id} onClick={markCollected}>Mark Collected</button>}
        </td>
      </tr>
    );
  }
  return (
    <div>
      <Row>
        <Col>
          <div className="relative flex flex-col bg-white rounded mb-4 xl:mb-0 shadow-lg mr-2 ml-8 animate__animated animate__zoomIn" style={{marginLeft:'3em'}}>
            <Table striped style={{ backgroundColor: "white" }}>
              <thead>
                <tr style={{ backgroundColor: "purple" }}>
                  <th colSpan={5} style={{color:'white'}}>Appointment History</th>
                </tr>
                <tr>
                  <th>SL No.</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Blood Group</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{data.map(getRow)}</tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CustomerDonation;
