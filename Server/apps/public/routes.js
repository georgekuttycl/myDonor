const express = require('express');
const controller = require('../public/controller/controller');


const router = express.Router();

router.post('/cutomerRegistration', controller.customerRegistration);
router.post('/hospitalRegistration', controller.hospitalRegistration);


module.exports = router;