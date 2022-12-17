const {Customer,Hospital,Appointment,AppointmentGuest,bloodGroup,feedback,request,payment}=require("../../../data/models");
 const express = require('express');
 const { QueryTypes } = require('sequelize');
 


// admin fetching customers from customers table
module.exports.customersGetAll = async(req, res, next) => {
    let data=await Customer.findAll();
    res.json(data);
}
//admin fetching hospital details from hospital table 
module.exports.hospitalsGetAllOne = async(req, res, next) => {
    let data=await Hospital.findAll();
    res.json(data);
}
//admin fetching bloodgroup details from bloodgroup table
module.exports.bloodGroupGetAllIndex = async(req, res, next) => {
    let data=await bloodGroup.findAll();
    res.json(data);
}
//admin fetching Appointment details from Appointment table
module.exports.AppointmentGetAllIn = async(req, res, next) => {
    let data=await Appointment.findAll();
    res.json(data);
}
//admin fetching AppointmentGuest details from AppointmentGuest table
module.exports.AppointmentGuestGetAllOf = async(req, res, next) => {
    let data=await AppointmentGuest.findAll();
    res.json(data);
}
//admin fetching feedback details from feedback table
module.exports.feedbackGetAllOff = async(req, res, next) => {
    let data=await feedback.findAll();
    res.json(data);
}
//admin fetching request details from request table
module.exports.requestGetAllInn = async(req, res, next) => {
    let data=await request.findAll();
    res.json(data);
}
//admin fetching request payment from payment table
module.exports.paymentGetAllInnn = async(req, res, next) => {
    let data=await request.findAll();
    res.json(data);
}
    
//admin hospital approval

module.exports.hospitalApproval = async(req,res)=>{
console.log(req.params.id);
 await Hospital.update({
    status:1
 },{
    where:{ id:req.params.id }
 }
 )

}





    














