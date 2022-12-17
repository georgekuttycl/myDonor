const controller= require("./customerController/customerController");
const controllerDonation= require("./customerController/customerDonationControllers");
const express = require('express');
const bodyparser= require('body-parser');

const router=express.Router();

router.post("/donation",controllerDonation.customerAppointment)

module.exports=router;