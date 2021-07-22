'use strict';

// handle signup & signin actions
const express = require('express');
const router = express.Router();

const model = require("../../models");
const Service = model.service;

const bcrypt = require('bcryptjs');

const config = require('../../config/auth.config');

const auth = require('../../middlewares/authJwt');

const jwt = require('jsonwebtoken');

const {body, validationResult} = require('express-validator');


// @route    POST api/services/
// @desc     Create new service
// @access   Private
router.post('/',auth, async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {name, password, description} = req.body;
    
    //CALLING PASSWORD-CHEQUER BEFORE ENCRYPT
    
    const salt = await bcrypt.genSaltSync(10);
    // hashing password with salt
    const encryptedPassword = await bcrypt.hash(password, salt);
    try {
        // res.json(req.body)
        const service = await Service.create(
            {
                user:req.user.id,
                name:name,
                password:encryptedPassword,
                description:description
            }
        );

        res.json(service);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});

// @route    GET api/services/
// @desc     Get current user services
// @access   Private


// @route    GET api/services/:user_id
// @desc     Get service by user ID
// @access   Public


// @route    DELETE api/services/
// @desc     Delete profile, user & posts
// @access   Private


// @route    PUT api/services/name_service
// @desc     change service name
// @access   Private


// @route    PUT api/services/password_service
// @desc     change service password
// @access   Private


// @route    PUT api/services/bio_service
// @desc     change service bio
// @access   Private




module.exports = router;