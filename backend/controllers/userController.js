const userSchema = require("../model/userSchema");
const { body, validationResult } = require('express-validator');

// Create User Controller
const createUserController = async (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        await userSchema.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
        });

        res.status(200).json({
            sucess: true,
            message: "Data Added Successfully"
        })
    } catch (error) {

        res.status(500).json({
            sucess: false,
            message: "Error in Create User API "
        })
        console.log(error);
    }
}

// login User Controller
const loginUserController = async (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const email = req.body.email;
        const userData = await userSchema.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "Please Provide Correct Credentials" })
        }
        if (req.body.password !== userData.password) {
            return res.status(400).json({ errors: "Please Provide Correct Credentials" })
        }
        res.status(200).json({
            sucess: true,
            message: "Login Successfully"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "Error in Login User API "
        })
        console.log(error);
    }
}

module.exports = { createUserController, loginUserController }