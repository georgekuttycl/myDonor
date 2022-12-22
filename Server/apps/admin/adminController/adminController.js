const {
    Customer,
    Hospital,
    Appointment,
    AppointmentGuest,
    bloodGroup,
    feedback,
    request,
    payment,
    User
} = require("../../../data/models");
const express = require('express');
const {
    QueryTypes
} = require('sequelize');
const ResponseModel = require("../../../utilities/responseModel");

// admin fetching customers from customers table
module.exports.customersGetAll = async (req, res, next) => {
    let data = await Customer.findAll();
    console.log(data);
    res.json(data);
}

//admin fetching hospital details from hospital table
module.exports.hospitalsGetAllOne = async (req, res, next) => {
    let data = await Hospital.findAll();
    console.log(data);
    res.json(data);
}
//admin fetching bloodgroup details from bloodgroup table
module.exports.bloodGroupGetAllIndex = async (req, res, next) => {
    let data = await bloodGroup.findAll();
    res.json(data);
}
//admin fetching Appointment details from Appointment table
module.exports.getAllAppointments = async (req, res, next) => {
    let data = await Appointment.findAll({
        include: [
            {
                model: User,
                include: {
                    model: Customer
                }
            },
        ]
    });

    var response = [];
    data.forEach(row=>{
        response.push({
            id: row.id,
            name: row.User.Customer.name,
            address: row.User.Customer.address,
            bloodGroup: row.Bloodgroup,
            date: row.date,
            weight:row.User.Customer.weight
        })
    })
    res.json(response);
}
//admin fetching AppointmentGuest details from AppointmentGuest table
module.exports.AppointmentGuestGetAllOf = async (req, res, next) => {
    let data = await AppointmentGuest.findAll();
    res.json(data);
}
//admin fetching feedback details from feedback table
module.exports.feedbackGetAllOff = async (req, res, next) => {
    let data = await feedback.findAll();
    res.json(data);
}
//admin fetching request details from request table
module.exports.requestGetAllInn = async (req, res, next) => {
    let data = await request.findAll();
    res.json(data);
}
//admin fetching request payment from payment table
module.exports.paymentGetAllInnn = async (req, res, next) => {
    let data = await request.findAll();
    res.json(data);
}

//admin hospital approval

module.exports.hospitalApproval = async (req, res) => {
    console.log(req.params.id);
    await Hospital.update({
        status: 1
    }, {
        where: {
            id: req.params.id
        }
    })
    return res.json({
        success: true,
        message: "Hospital Approved Successfully"
    });
}

module.exports.rejectHospital = async (req, res) => {
    console.log(req.params.id);
    await Hospital.update({
        status: 0
    }, {
        where: {
            id: req.params.id
        }
    })
    return res.json({
        success: true,
        message: "Hospital Rejected Successfully"
    });
}

module.exports.approveAppointment = async(req, res)=>{
    const id = req.params.id;
    const appointment = await Appointment.findByPk(id);
    appointment.status = 'collected';
    appointment.save();
    return res.json(new ResponseModel(appointment));
}