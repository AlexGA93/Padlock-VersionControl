const jwt = require('jsonwebtoken');
const config = require('../config/auth');

const verifyToken = (event, callback) => {
    // extract token 
    const token = event.headers["x-auth-token"];

    //test with callback to use as response
    const response = callback;
    // check if no token ==> callback 401 No token provided, operation denied

    // if token trycatch
        // jwt verify  and check if errors
    return token
}
module.exports = verifyToken;