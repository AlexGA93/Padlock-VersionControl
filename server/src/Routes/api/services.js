'use strict';

// handle signup & signin actions
const express = require('express');
const router = express.Router();

const model = require("../../models");
const Service = model.service;

const bcrypt = require('bcryptjs');
const CryptoJS = require('crypto-js');

const config = require('../../config/auth.config');

const auth = require('../../middlewares/authJwt');



// @route    POST api/services/
// @desc     Create new service
// @access   Private
router.post('/',auth, async (req,res)=>{
    

    const {name, password, description} = req.body;
    
    //CALLING PASSWORD-CHEQUER BEFORE ENCRYPT
    
    // const salt = await bcrypt.genSaltSync(10);
    // // hashing password with salt
    // const encryptedPassword = await bcrypt.hash(password, salt);
    const encPass = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(password));

    try {
        // res.json(req.body)
        await Service.create(
            {
                user:req.user.id,
                name:name,
                password:encPass,
                description:description
            }
        ).then(service=>res.json(service))
        .catch(() => res.json('Error During Data Filing'));

        
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});

// @route    GET api/services/:user_id
// @desc     Get service by user ID
// @access   Public
router.get("/:user_id", auth, async (req,res)=>{
    try {

        const id = req.user.id;

        await Service
        .findOne({user:id})
        .then(service => {
            const dec = CryptoJS.enc.Base64.parse(service.password).toString(CryptoJS.enc.Utf8);
            service.password = dec;
            res.json(service);
        })
        .catch(() => res.json('Error During Data Filing'));;

    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});

// @route    DELETE api/services/delete/:service_id
// @desc     Delete profile, user & posts
// @access   Private
router.delete("/delete/:id", auth, async (req, res)=>{
    try {
        
        const id = req.user.id
        //console.log(req);
        await Service
        .findOneAndRemove({user:id})
        .then(()=>res.json("Service deleted"))
        .catch(() => res.json('Error During Data Filing'));;

    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});

// @route    PUT api/services/name/service_id
// @desc     change service name
// @access   Private
router.put("/name/:id", auth, async (req, res) => {
    //console.log(req.user.id);
    try {
        const id = req.params.id;
        // find
        await Service
        .findById({_id:id})
        .then(service => {
            //console.log(service);
            service.name = req.body.name;
            service.save();

            res.json("Service name modified successfully!")
        })
        .catch(() => res.json('Error During Data Filing'));;
        

    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }

});

// @route    PUT api/services/pass/service_id
// @desc     change service password
// @access   Private
router.put("/pass/:id", auth, async (req, res) => {
    
    try {
        const id = req.params.id;
        //const salt = await bcrypt.genSaltSync(10);
        // hashing password with salt
        //const encryptedPassword = await bcrypt.hash(req.body.password, salt);
        const encPass = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(req.body.password));
        // find
        await Service
        .findById({_id:id})
        .then(service => {
            
            //console.log(service.password);
            service.password = encPass;
            service.save();

            res.json("Service password modified successfully!")
        })
        .catch(() => res.json('Error During Data Filing'));
        

    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }

});

// @route    PUT api/services/bio/service_id
// @desc     change service bio
// @access   Private
router.put("/bio/:id", auth, async (req, res) => {
    //console.log(req.user.id);
    try {
        const id = req.params.id;
        
        // find
        await Service
        .findById({_id:id})
        .then(service => {
            //console.log(service);
            service.description = req.body.description;
            service.save();

            res.json("Service description modified successfully!");
        })
        .catch(() => res.json('Error During Data Filing'));
        

    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }

});



module.exports = router;