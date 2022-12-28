import {React,useEffect, useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBTypography,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";
import logo from "./../../assets/img/logo.png";
import jwt_decode from "jwt-decode";
import {updateCustomer,hospitalInvoice} from "../../api/customerApi";
import JsPDF from 'jspdf';
import { Button } from 'reactstrap';

function CustomerInvoice() {
    const [profile, setProfile] = useState({});
    const [invoice, setInvoice] = useState({});

    useEffect(()=>{
        var token = localStorage.getItem('token');
        var decodedToken = jwt_decode(token);
        var res = updateCustomer(decodedToken.id).then(res=>{
            setProfile(res.data)
        });
        hospitalInvoice().then(res=>{
            setInvoice(res.data)
        })


    }, [])
    let quantity = invoice.quantity;
    let amount = quantity*200;

    //toPdf
    const generatePDF = () => {

        const report = new JsPDF('landscape','pt','a3');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
        });
    }
    return (
        <div className="max-h-screen max-w-screen" id='report'>
            <div className="w-75 p-3 ml-40 mt-16">
            <MDBContainer className="py-5">
                <MDBCard className="p-4 border border-danger">
                    <MDBCardBody>
                        <MDBContainer className="mb-2 mt-3">
                            <MDBRow className="d-flex align-items-baseline">
                                <MDBCol xl="9">

                                </MDBCol>
                                <MDBCol xl="3" className="float-end">
                                    <Button
                                            far
                                            icon="file-pdf"
                                            color="danger"
                                            className="me-1"
                                            onClick={generatePDF}
                                        >
                                        Export
                                    </Button>
                                    <hr />
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <MDBContainer>
                            <MDBCol md="12" className="ml-80 ">
                                <img src={logo} height={100} width={140}/>
                            </MDBCol>
                        </MDBContainer>
                        <MDBRow>
                            <MDBCol xl="8">
                                <MDBTypography >
                                    <p className="text-muted">
                                        To: <span style={{ color: "red" }}>{profile.name}</span>
                                    </p>
                                </MDBTypography>
                            </MDBCol>
                            <MDBCol xl="4">
                                <p className="text-muted ">Invoice</p>
                                <MDBTypography listUnStyled>
                                    <li className="text-muted ">
                                        <MDBIcon fas icon="circle" style={{ color: "darkred" }} />
                                        <span className="fw-bold ms-1">Creation Date: </span>
                                        {invoice.date}
                                    </li>
                                    <li className="text-muted ">
                                        <MDBIcon fas icon="circle" style={{ color: "darkred" }} />
                                        <span className="fw-bold ms-1">Status:</span>
                                        <span className="badge bg-success text-black fw-bold ms-1">
                                            Paid
                                        </span>
                                    </li>
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="my-2 mx-1 justify-content-center">
                            <MDBTable striped borderless>
                                <MDBTableHead
                                    className="text-white"
                                    style={{ backgroundColor: "red" }}
                                >
                                    <tr>
                                        <th scope="col">SL No</th>
                                        <th scope="col">Blood Group</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                    <th scope="row">1</th>
                                        <td>{invoice.group}</td>
                                        <td>{invoice.quantity}</td>
                                        <td>₹{amount}</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol xl="8">
                                <p className="ms-3">

                                </p>
                            </MDBCol>
                            <MDBCol xl="3">
                                <p className="text-black float-start">
                                    <span className="text-black me-3"> Amount Paid</span>
                                    <span style={{ fontSize: "25px" }}>₹{amount}</span>
                                </p>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol xl="10">
                                <p>Thank you for your purchase</p>
                            </MDBCol>
                            <MDBCol xl="2">
                                <MDBBtn
                                    className="text-capitalize"
                                    style={{ backgroundColor: "green", border:"none" }}
                                >
                                    Payment Successfull
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
        </div>
    );
}

export default CustomerInvoice;