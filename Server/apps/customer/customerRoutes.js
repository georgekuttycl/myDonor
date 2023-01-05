const express = require('express')
const controller = require("./customerController/customerController");
const controllerDonation= require("./customerController/customerDonationControllers");

const router = express.Router();

router.post('/feedbackDetails', controller.feedbackDetails);
router.post('/requestblood',controller.requestBlood);
router.post("/donation",controllerDonation.customerAppointment)
router.post("/donation/guest",controllerDonation.guestAppointment)
 router.get('/update',controller.getUpdateCustomer);
 router.post('/update',controller.postUpdateCustomer);

 router.get('/customerDetails',controller.customerDetails);


module.exports = router;
