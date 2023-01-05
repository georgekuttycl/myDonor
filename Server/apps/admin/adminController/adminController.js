const {
    Customer,
    Hospital,
    Appointment,
    AppointmentGuest,
    bloodGroup,
    feedback,
    Request,
    payment,
    User,
    Payment
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
   console.log(data);

    var response = [];
    data.forEach(row=>{
        response.push({
            id: row.id,
            name: row.relation == 'friend'? row.name: row.User.Customer.name,
            address: row.User.Customer.address,
            bloodGroup: row.Bloodgroup,
            date: row.date,
            weight:row.User.Customer.weight,
            status: row.status
        })
        //console.log(row.Customer.name);
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

//admin home page stats
module.exports.adminStats = async(req,res)=>{
    let hospitalCount = await User.count({
        where:{
            role:'hospital',
        }
    });
    let customerCount = await User.count({
        where:{
            role:'customer',
        }
    });

    let stockCount = await Appointment.count({
        where:{
            status:'collected'
        }
    });

    let purchaseCount = await Request.count();
    // console.log(purchaseHistory);
    return res.json({
        hospitalCount: hospitalCount,
        customerCount: customerCount,
        stockCount: stockCount,
        purchaseCount: purchaseCount
    })
}

//admin home page tables
//Hospital Purchase History
module.exports.hospitalPurchaseHistory = async(req,res)=>{
    let purchaseHistory = await Request.findAll({
        include: [
            {
                model: User,
                include: {
                    model:Hospital,
                },
                where:{
                    role:'hospital'
                }
            }
        ]
    });

    var response = [];
    purchaseHistory.forEach(row=>{
        const amount = 200/row.quantity;
        response.push({
            id: row.id,
            hospitalName: row.User.Hospital.name,
            quantity:row.quantity,
            group:row.group,
            amount:amount,
           date:row.date
        })
    })
    res.json(response);
}

//Customer purchase History
module.exports.customerPurchaseHistory = async(req,res)=>{
    let purchaseHistory = await Request.findAll({
        include:[{
            model:User,
            include:{
                model:Customer
            },
            where:{
                role:'customer'
            }
        }]
    });
    var response = [];
    purchaseHistory.forEach(row=>{
        const amount = 200/row.quantity;
        response.push({
            id: row.id,
            hospitalName: row.User.Customer.name,
            quantity:row.quantity,
            group:row.group,
            amount:amount,
           date:row.date
        })
    })
    res.json(response);
}