const express = require('express')
const controller = require('../customer/customerController/customerController');
const router = express.Router();
router.post('/feedbackDetails', controller.feedbackDetails);
router.post('/customerBloodRequest', controller.feedbackDetails);


module.exports = router;