const express = require('express');
const { orderDataController, myOrderDataController } = require('../controllers/orderController');

const router = express.Router();

// Order Data || POST
router.post("/orderData", orderDataController);

// My Order Data || POST
router.post("/myorderData", myOrderDataController);

module.exports = router;