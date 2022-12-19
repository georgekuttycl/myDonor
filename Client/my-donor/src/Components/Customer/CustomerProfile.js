import React from 'react';
import './CustomerProfile.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CustomerProfile() {
  return (
    <div className="container emp-profile">
            <form method="post mt-6">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="data:image/jpeg;base64,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" alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        Georgekutty CL
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
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
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Kshiti123</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Georgekutty CL</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>georgekuttycl@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>8848753040</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
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

export default CustomerProfile