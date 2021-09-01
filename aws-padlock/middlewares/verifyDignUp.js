const db = require('../models');
const User = db.User;

const checkDuplicateUsernameOrEmail = (req,res,next) => {
    // find username in database
    const userName = req.params.name;
    User
    .findOne({name:userName})
    .exec((err,user)=>{
        if (err) {
          return res.status(500).send({ message: err });  
        }
        if (user) {
          return res.status(400).send({ message: "Failed! Username is already in use!" });
        }
    });

    // find email in database
    const userEmail = req.params.email;
    User
    .findOne({email:userEmail})
    .exec((err,user)=>{
        if (err) {
            res.status(500).send({ message: err });
            return;
          }
      
          if (user) {
            res.status(400).send({ message: "Failed! user email is already in use!" });
            return;
          }
    });
}

module.exports = checkDuplicateUsernameOrEmail;