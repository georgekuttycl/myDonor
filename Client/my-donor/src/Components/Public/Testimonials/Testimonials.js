import React, { useEffect,useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testimonials.css";
import logo from "../../../assets/img/logo.png";
import {getFeedback} from "../../../api/feedbackApi";

function Testimonials() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    getFeedback().then((data) => {
      setFeedback(data.data);
      // console.log(feedback)
      // console.log(data.data[0].description);
    });
  }, []);


  const getDiv = (feedback,index)=>{
    console.log(feedback);
    return (
      <div key={index} style={{backgroundColor:"#fafafa"}} className="py-2">
          <img src={logo} />
          <div className="myCarousel">
            <h3>{feedback.User.role === 'hospital'? feedback.User.Hospital.name: feedback.User.Customer.name}</h3>
            {/* <h3>{feedback.User.Hospital.name}</h3> */}
            <h4>{feedback.User.role}</h4>
            <p>
            {feedback.description}
            </p>
          </div>
        </div>
    )
}

  return (
    <div className>
      <h1 className="text-center">Testimonials</h1>
   <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
       {feedback.map(getDiv)}
      </Carousel>
    </div>
  )
}

export default Testimonials