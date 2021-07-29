

const express = require('express');
const router = express.Router();

const model = require("../../models");
const User = require("../../models/user");

const bcrypt = require('bcryptjs');

const config = require('../../config/auth.config');

const auth = require('../../middlewares/authJwt');

const jwt = require('jsonwebtoken');

const {body, validationResult} = require('express-validator');


//@route GET api/auth
//@desc Get user by token
//@access Private

router.get("/", auth, async (req,res)=>{
    try {
        
        const id = req.user.id;
        await User
        .findById({_id:id})
        .then(user=>{
            //console.log(user);
            !user ? ( 
                res.status(400).json({ msg: 'Error to obtain user information' })
            ) : (
                res.json(user)
            )
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route POST api/auth
//@desc Authenticate User(login) & Get Token
//@access Private

router.post("/",[
    // email and password required
    body('email').isEmail().withMessage('Please include a valid email'),
    body('password').exists().withMessage('Password is required')
], async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //if not errors
      return res.status(400).json({ errors: errors.array() }); //return us status (ideal : 400)
    }

    // check if user exists by email & return jwt signed
    const {email, password} = req.body;
    try {
        //console.log(req);
        await User
        .findOne({email})
        .then(user =>{
            if (!user) return res.status(400).json({errors:[{msg:"INvalid Credentials"}]});
            //decrypt password & compare
            const isValid = bcrypt.compareSync(password, user.password)
            if(!isValid){
                return res.status(400).json({errors:[{msg:"Invalid Password"}]})
            }
            // jwt sign
            const payload = {
                user: {
                id: user.id,
                },
            };
            jwt.sign(payload, config.secret,{expiresIn:300},(err,token)=>{
                if (err) throw err; //check for errors
                res.json({ token }); //if not errors, send token as json
            });
        })
        

    } catch (err) {
        console.error("Error: " + err.message);
        res.status(500).send("Server error during authentication"); 
    }

});

module.exports = router;