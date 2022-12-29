import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import LandingPageHeader from "./LandingPageHeader";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials/Testimonials";

function Home() {

  return (
    <div>
    <LandingPageHeader/>
    <div className="section text-center">
    <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title">myDonor</h2>
            <h5 className="description text">
              This web Application manages all the activities from blood
              collection. The main goal of this project is to monitor blood bank
              data, blood stock, and donor lists. This system gives a reliable
              platform for both donors and acceptors.
            </h5>
            <br />
            <Button
              className="btn-round btn btn-danger"
              // style={{backgroundColor:"#ff0000",borderColor:"#ff0000"}}
              color="info"
              to="#"
              onClick={(e) => e.preventDefault()}
              tag={Link}
            >
              See Details
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-album-2" style={{color:"#f5593d"}}/>
              </div>
              <div className="description">
                <h4 className="info-title">Gallery</h4>
                <p className="description">
                  See our Blood Donation Camp Photos
                </p>
                <Button
                className="btn-round btn btn-danger"
                to={"/gallery"}
                tag={Link}>
                  Gallery
                </Button>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-bulb-63" style={{color:"#f5593d"}}/>
              </div>
              <div className="description">
                <h4 className="info-title">Learn About Donation</h4>
                <p>
                  Learn about Compatible Blood Type Donors
                </p>
                <Button
                className="btn-round btn btn-danger"
                to={"/learn"}
                tag={Link}>
                  Learn
                </Button>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="info">
              <div className="icon icon-info">
                <i className="nc-icon nc-sun-fog-29" style={{color:"#f5593d"}}/>
              </div>
              <div className="description">
                <h4 className="info-title">Types of Donation</h4>
                <p>
                  Learn about Diff Types of Donation
                </p>
                <Button
                className="btn-round btn btn-danger"
                to={"/types"}
                tag={Link}>
                  Types
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="section section-dark text-center">
      <Container>
        <h2 className="title">Let's talk about us</h2>
        <Row>
          <Col md="3">
            <Card className="card-profile card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("../../assets/img/george.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">Georgekutty CL</CardTitle>
                    <h6 className="card-category">Lead</h6>
                  </div>
                </a>

              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-twitter"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-google-plus-g"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="2">
            <Card className="card-profile card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("../../assets/img/joseph.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">Joseph J Valavi</CardTitle>
                    <h6 className="card-category">Designer</h6>
                  </div>
                </a>

              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-twitter"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-google-plus-g"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="2">
            <Card className="card-profile card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("../../assets/img/finu.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">Finu Fathima N</CardTitle>
                    <h6 className="card-category">Developer</h6>
                  </div>
                </a>

              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-twitter"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-google-plus-g"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="2">
            <Card className="card-profile card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("../../assets/img/varsha.jpg")}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">Roslin Varsha</CardTitle>
                    <h6 className="card-category">Developer</h6>
                  </div>
                </a>

              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-twitter"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-google-plus-g"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="2">
            <Card className="card-profile card-plain">
              <div className="card-avatar">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    src={require("../../assets/img/joyal.JPG")}
                  />
                </a>
              </div>
              <CardBody>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <div className="author">
                    <CardTitle tag="h4">Joyal Johnson</CardTitle>
                    <h6 className="card-category">Developer</h6>
                  </div>
                </a>

              </CardBody>
              <CardFooter className="text-center">
                <Button
                  className="btn-just-icon btn-neutral"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-twitter"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-google-plus-g"></i>
                </Button>
                <Button
                  className="btn-just-icon btn-neutral ml-1"
                  color="link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    <Testimonials/>
  </div>
  );
}

export default Home;
