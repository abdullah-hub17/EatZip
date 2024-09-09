const express = require('express');
const { foodDataController } = require('../controllers/displayDataController');

const router = express.Router();

// Food Data || POST
router.post("/foodData", foodDataController);

module.exports = router;