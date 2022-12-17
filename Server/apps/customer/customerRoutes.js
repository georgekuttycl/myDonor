const express = require('express')
const controller = require('../customer/customerController/customerController');
const router = express.Router();
//router of customer sending feedback
router.post('/feedbackDetails', controller.feedbackDetails);
//router of customer sending blood request
//router.post('/requestBlood', controller.requestBlood);


module.exports = router;