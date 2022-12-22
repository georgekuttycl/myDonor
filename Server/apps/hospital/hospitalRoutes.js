/**done by finu */

const express = require('express');
const controller = require('../hospital/hospitalController/hospitalController');
const router = express.Router();

//router.get('/getall', controller.hospitalGetAll);

router.get('/updatehospital', controller.updateHospital);
router.post('/updatehospital', controller.updateHospitalPost);
//router.post('/update/hospital/:id', controller.updateHospitalPost);
//router.post('/delete/hospital/:id', controller.deleteHospital);
router.post('/feedback', controller.feedbackHospital);
//router.get('/logout', controller.logoutHospital);

-router.get('/payment', controller.hospitalPayment);
-router.get('/paymentStore', controller.hospitalPaymentStore);
-router.get('/invoice', controller.hospitalInvoice);

module.exports = router;