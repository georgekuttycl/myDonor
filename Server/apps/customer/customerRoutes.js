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
