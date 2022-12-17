const express = require('express');
const controller = require('../public/controller/controller');


const router = express.Router();

router.post('/customerRegistration', controller.customerRegistration);
router.post('/hospitalRegistration', controller.hospitalRegistration);
router.post('/login', controller.login);
router.post('/forgotpassword', controller.forgotPassword);


module.exports = router;