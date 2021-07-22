/*
"signup": 
    Create a new user, if it exists
"signin": {
    1. find username of the request in database, if it exists
    2. compare password with password in database using bcrypt, if it is correct
    3. generate a token using jsonwebtoken
    4. return user information & access Token
}
*/

const config = require('../config/auth.config');

const db = require('../models');
const User = db.user;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const signup = (req, res) => {
    // Add new user to database
    
};

const signin = (req,res) => {

};


//exporting
const authController = {
    signin,
    signup
};

module.exports = authController;