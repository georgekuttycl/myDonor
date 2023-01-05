
import React from "react";
import { useState,useEffect } from "react";

import { Button, Container } from "reactstrap";
import { hospitalName,hospitalStats } from "../../api/hospitalApi";



function HospitalLandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    hospitalName().then((data) => {
      console.log(data);
      setData(data);
    });

  }, []);


  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("../../assets/img/banner2.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Welcome to your Account</h1>
            <h3>{data.name}</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HospitalLandingPageHeader;
