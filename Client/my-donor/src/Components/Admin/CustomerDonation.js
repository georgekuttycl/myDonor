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
          {item.status === "collected"?<span>Collected</span>:<button className="bg-indigo-600 text-white" data-id={item.id} onClick={markCollected}>Mark Collected</button>}
        </td>
      </tr>
    );
  }
  return (
    <div>
      <Row>
        <Col>
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
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
