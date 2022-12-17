const express = require('express');
const controller = require('../customer/customerController/customerController');
const router = express.Router();
router.get('/getall',controller.customersGetAll);

router.get('/update/customer/:id',controller.updateCustomer);
router.post('/update/customer/:id',controller.updatingCustomer);
router.post('/delete/customer/:id',controller.deletingCustomer);

module.exports = router;