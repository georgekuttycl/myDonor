const express = require('express')
const controller = require('../customer/customerController/customerController');
const router = express.Router();
//router of customer sending feedback
router.post('/feedbackDetails', controller.feedbackDetails);
//router of customer sending blood request
//router.post('/requestBlood', controller.requestBlood);

module.exports = router;
const express = require('express');

const controller = require("./customerController/customerController");
const controllerDonation= require("./customerController/customerDonationControllers");
const express = require('express');
const bodyparser= require('body-parser');

const router = express.Router();

router.get('/getall',controller.customersGetAll);
router.post("/donation",controllerDonation.customerAppointment)
router.get('/update/customer/:id',controller.updateCustomer);
router.post('/update/customer/:id',controller.updatingCustomer);
router.post('/delete/customer/:id',controller.deletingCustomer);

module.exports = router;
