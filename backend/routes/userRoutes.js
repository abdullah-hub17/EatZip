const express = require('express');
const { createUserController, loginUserController } = require('../controllers/userController');
const { body, validationResult } = require('express-validator');


const router = express.Router();

// Create User || POST
router.post("/createuser", [

    body('email', "Email is Incorrect").isEmail(),
    // password must be at least 5 chars long
    body('password', "Password Length must be 6 characters long").isLength({ min: 5 })], createUserController);

// Login User || POST

router.post("/loginuser", [

    body('email', "Email is Incorrect").isEmail(),
    // password must be at least 5 chars long
    body('password', "Password Length must be 6 characters long").isLength({ min: 5 })], loginUserController)

module.exports = router;