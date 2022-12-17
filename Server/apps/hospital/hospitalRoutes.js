/**done by finu */

const express = require('express');
const controller = require('../hospital/hospitalController/hospitalController');
const router = express.Router();

router.get('/getall', controller.hospitalGetAll);

router.get('/update/hospital/:id', controller.updateHospital);
router.post('/update/hospital/:id', controller.updateHospitalPost);
//router.post('/delete/hospital/:id', controller.deleteHospital);
router.post('/feedback', controller.feedbackHospital);
//router.get('/logout', controller.logoutHospital);

module.exports = router;