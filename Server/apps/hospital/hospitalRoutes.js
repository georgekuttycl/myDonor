/**done by finu */

const express = require('express');
const controller = require('../hospital/hospitalController/hospitalController');
const router = express.Router();

//router.get('/getall', controller.hospitalGetAll);

router.get('/updatehospital', controller.updateHospital);
router.post('/updatehospital', controller.updateHospitalPost);
router.post('/feedback', controller.feedbackHospital);

router.get('/payment', controller.hospitalPayment);
router.get('/paymentStore', controller.hospitalPaymentStore);
router.get('/invoice', controller.hospitalInvoice);

router.get('/hospitalDetails',controller.hospitalDetails);
router.get('/hospital/stats',controller.hospitalStats);


module.exports = router;