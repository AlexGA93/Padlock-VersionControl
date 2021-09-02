'use strict';
const { connect } = require("mongoose");
const connectDB = require("../../config/db");
const authJWT = require("../../middlewares/auth");

const User = require("../../models/user")

module.exports.getUserByToken = async (event, context, callback) => {
  
  // authJWT();
  // connectDB()
  // .then(() => {

  // });
  // check token authentication
  // extract user id 
  // mongo checking for user's id
  // return user id
  
    const response = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'getUserByToken',
            input: event,
          },
          null,
          2
        ),
      };

      callback(null, response);
}

module.exports.authenticateUser = async (event, context, callback) => {
  var header = authJWT(event, callback);
  // var fullEvent = event; // object
  // var eventBody = JSON.parse(event.body); // string 

  const response = {
    statusCode: 200,
        body: JSON.stringify(
          header,
          null,
          2
        )
  };

  callback(null,response);
}