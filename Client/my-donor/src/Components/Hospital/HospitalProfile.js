import React from 'react'
import './HospitalProfile';
import {useState,useEffect} from 'react';
 import { updateHospital } from '../../api/hospitalApi';
import { Button } from 'reactstrap';
function HospitalProfile() {
  const [data, setData] = useState({});
  const [user, setUser] = useState({});


useEffect(() => {
    updateHospital()
    .then(result => {console.log("front end",result.data)
        setData(result.data);
        setUser(result.data.User)
    });
}, []);

  return (
     <div className="container emp-profile">
            <form method="post mt-6">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h3>
                                        {data.name}
                                    </h3>
                                    <h5>
                                        {data.category}
                                    </h5>
                                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        {/* <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/> */}
                        <Button className="profile-edit-btn" href={"/hospital/update"}>Edit profile</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{data.id}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{data.name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{data.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Catogory</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{data.category}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>license Number</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{data.licenseNumber}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>PinCode</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{data.pin}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>State</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{data.state}</p>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default HospitalProfile