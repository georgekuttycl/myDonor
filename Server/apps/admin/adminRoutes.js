const express = require('express');
const controller = require('../admin/admincontroller/admincontroller');

const router = express.Router();
//router of customer registeration details
router.get('/getall', controller.customersGetAll);
//router of hospital registeration details
router.get('/getallone', controller.hospitalsGetAllOne);


//router of payment registeration details
// router.get('/getallones', controller.paymentsGetAllOnes);


//router of bloodstock details
router.get('/getallindex', controller.bloodGroupGetAllIndex);
//router of Appointment details
router.get('/getallappointments', controller.getAllAppointments);
//router of Approve appointments
router.get('/approve-appointment/:id', controller.approveAppointment);
//router of AppointmentGuest details
router.get('/getallof', controller.AppointmentGuestGetAllOf);
//router of request details
router.get('/requestGetAllInn', controller.requestGetAllInn);
//router of payment details
router.get('/paymentGetAllInnn', controller.paymentGetAllInnn);
//router of feedback details
router.get('/getalloff', controller.feedbackGetAllOff);
//router of hospital approval
router.get('/hospitalapproval/:id', controller.hospitalApproval);
//router of hospital rejection
router.get('/rejecthospital/:id', controller.rejectHospital);

router.get('/adminStats',controller.adminStats);
router.get('/hospitalPurchaseHistory',controller.hospitalPurchaseHistory);
router.get('/customerPurchaseHistory',controller.customerPurchaseHistory);

module.exports = router;