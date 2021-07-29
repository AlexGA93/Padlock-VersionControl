'use strict';

// handle signup & signin actions
const express = require('express');
const router = express.Router();

const model = require("../../models");
const User = model.user;

const bcrypt = require('bcryptjs');

const config = require('../../config/auth.config');

const auth = require('../../middlewares/authJwt');

const jwt = require('jsonwebtoken');

const {body, validationResult} = require('express-validator');


//@route POST api/users/signup/
//@desc Register user
//@access Public

router.post("/signup", [
    body('name')
    .not()
    .isEmpty()
    .withMessage('Username is required'),
    // Email required
    body('email')
    .not().isEmpty().withMessage('Email is required.'),
    // password longer than 8 characters
    body("password")
    .isLength({min:8})
    .withMessage('Password must be at least 8 chars long'),
    // age must not be lower than 18 
    body('age')
    .notEmpty()
    .withMessage('Age is required')
    .isInt({min:18})
    .withMessage('You must be older than 18 years old.')
], async (req,res)=>{
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            //if not errors
            return res.status(400).json({ errors: errors.array() });
          }

        //extracting request data
        const {name, email, password} = req.body;
        // Check if user and email exists
        require('../../middlewares/verifySignUp');

        // encrypt password
        //generate salt
        const salt = await bcrypt.genSaltSync(10);
        // hashing password with salt
        const encryptedPassword = await bcrypt.hash(password, salt);
        
        await User.create({
            name:name,
            email:email,
            password:encryptedPassword
        }).then((user)=>{
            // jwt stuff
            // jwt sign
            const payload = {user: {id: user.id}};

            jwt.sign(payload, config.secret,{expiresIn:300},(err,token)=>{ //3 min
                if (err) throw err; //check for errors
                res.json({ token }); //if not errors, send token as json
            });
        });

        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error during user registration');
    }
});



//@route DELETE api/users/delete
//@desc remove user information
//@access Public

router.delete("/delete",auth, async(req, res)=>{
    try {
        // console.log(req.user.id);
        const id = req.user.id;

        // remove user
        await User.findByIdAndRemove({_id:id}).then(()=> res.json('User and information deleted'));
        
        
       
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error during data extraction');
    }
});

module.exports = router;