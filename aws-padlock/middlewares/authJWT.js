// To process Authentication and Authorization
const jwt = require('jsonwebtoken');
// refresh token
const config = require('../config/auth.config');

//  Check if token is provided, legal or not using jwt
const verifyToken = (req, res, next) => {
  // check if there is token in request
  let token = req.header('x-auth-token');
  // check if no token
  if(!token){ 
    return res
          .status(401)
          .send({
            msg:"No token provided, operation denied",
          })
  }
  // verify token
  try {
    // Verify json web token 
    // using request token, refresh token secret, 
    jwt.verify(token, config.secret, (err, decoded)=>{
      if (err) {
        return res.status(401).send({ message: "Unauthorized! token no valid" });
      }else{
        req.user = decoded.user;      }
        next();
    });
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }

  
};

module.exports = verifyToken;