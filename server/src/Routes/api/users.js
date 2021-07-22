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


//@route POST /user/signup/
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

            jwt.sign(payload, config.secret,{expiresIn:180},(err,token)=>{ //3 min
                if (err) throw err; //check for errors
                res.json({ token }); //if not errors, send token as json
            });
        });

        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error during user registration');
    }
});



//@route DELETE /user/delete/:id
//@desc remove user information
//@access Public

router.delete("/delete",auth, async(req, res)=>{
    try {
        // console.log(req.user.id);
        const id = req.user.id;

        // remove user
        await User.findByIdAndRemove({_id:id});
        // remove service
        
        res.json('User and information deleted')
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error during data extraction');
    }
});


















// // Register new User
// router.post(
//     "/new_user/",
//     [
//         // Email required
//         body('email')
//         .not().isEmpty().withMessage('Email is required.')
//         // Check for existing email in database
//         .custom((value, {req})=>{
//             return new Promise((resolve, reject)=>{
//                 User.findOne({email:req.body.email},(err,user)=>{
//                     if (err) {
//                         reject(new Error('Server Error checking for email in database'));
//                     }
//                     if (Boolean(user)){
//                         reject('E-mail already in use');
//                     }
//                     resolve(true);
//                 });
//             });
//         }),
//         // password cheked with passchecker
//         // age must not be lower than 18 
//         body('age')
//         .notEmpty()
//         .withMessage('Age is required')
//         .isInt({min:18})
//         .withMessage('You must be older than 18 years old.')
//     ],
//     (req,res) => {
//         const {name, email, password} = req.body;
//         const errors = validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()});
//         }
//         try {
//             User.create({
//                 name:name,
//                 email:email,
//                 password:password
//             }).then(user => {
//                 res.json(user);
//                 // console.log(user);
//             });
//         } catch (err) {
//             console.log(err.message);
//             res.status(500).send('Server Error during user registration');
//         }


//     }
//     );
// // Get current user by Id
// router.get(
//     "/current/:id",
//     [body('id').not().isMongoId().withMessage('Please, introduce a proper MongoId')],
//     async (req,res) => {
//         const errors = validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()});
//         }
//         try {
//             const id = req.params.id;
//             const user = await User.findById({_id:id});
//             res.json(user);
//         } catch (err) {
//             res.status(500).send('Server Error during user deploy');
//         }
//     }
//     );
// // Delete user by Id
// router.delete(
//     "/remove/:id",
//     [body('id').not().isMongoId().withMessage('Please, introduce a proper MongoId')],
//     async (req,res) => {
//         const errors = validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()});
//         }
//         try {
//             const id = req.params.id;
//             await User.findById({_id:id}).deleteOne();
//             res.json(`user deleted`);
//         } catch (err) {
//             res.status(500).send('Server Error during user deploy');
//         }
//     }
//     ); 
// // Update user email by Id
// router.put(
//     "/update_email/:id",
//     [body('id').not().isMongoId().withMessage('Please, introduce a proper MongoId')],
//     async (req,res) => {
//         const errors = validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()});
//         }
//         try {
//             // find 
//             const user = await User.findById({_id:req.params.id});
//             if(user.email == req.body.email){
//                 return res.status(400).json({msg:'Error: Email provided is the same as stored'});
//             }
//             // edit
//             await User.findOneAndUpdate({email:req.body.email});
//             res.json(`User's email modified`)
//             // save
//         } catch (err) {
//             res.status(500).send('Server Error during user deploy');
//         }
//     }
//     );
// // Update user pass by Id
// router.put(
//     "/update_psswd/:id",
//     [body('id').not().isMongoId().withMessage('Please, introduce a proper MongoId')],
//     async (req,res) => {
//         const errors = validationResult(req);
//         if(!errors.isEmpty()){
//             return res.status(400).json({errors:errors.array()});
//         }
//         try {
//             // find 
//             const user = await User.findById({_id:req.params.id});
//             const new_pass = req.body.password;
            
//             if(user.password == new_pass){
//                 return res.status(400).json({msg:'Error: Password provided is the same as stored'});
//             }
//             // edit
//             await User.findOneAndUpdate({password:new_pass});
//             res.json(`User's password modified`)
//             // save
            
//         } catch (err) {
//             res.status(500).send('Server Error during user deploy');
//         }
//     }
//     );

module.exports = router;