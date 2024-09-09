const userSchema = require("../model/userSchema");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

// Create User Controller
const createUserController = async (req, res) => {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Hashing Password 
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    try {

        await userSchema.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: secPassword
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

        // find user email to database
        const userData = await userSchema.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "Please Provide Correct Credentials" })
        }

        // compare password to hash password
        const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
        if (!pwdCompare) {
            return res.status(400).json({ errors: "Please Provide Correct Credentials" })
        }
        const data = {
            user: {
                id: userData.id
            }
        }

        // create Json Web Token 
        const authToken = jwt.sign(data, process.env.SECRET_KEY)
        res.status(200).json({
            sucess: true,
            message: "Login Successfully",
            authToken: authToken
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