'use strict';
// const connectDB = require("./db/mongodb/mongodb");
// const Service = require('./db/models/service');

// Add a new service

module.exports.newService = async (event, context, callback) => {
     
    const body = event.body;

    const response = {
        statusCode: 200,
        body:JSON.stringify(JSON.parse(body))
    }

    return response;
}

// Get current service

module.exports.getCurrentService = async (event, context, callback) => {
    // connectDB();
    const id = event.pathParameters.user_id;
    // User.find({});
    const response = {
        statusCode: 200,
        body:JSON.stringify(id)
    }

    return response;
}

// Delete Current Service

module.exports.deleteService = async (event, context, callback) => {

    const id = event.pathParameters.user_id;
    const response = {
        statusCode: 200,
        body:JSON.stringify(`deleting user by ${id}`)
    }

    return response;
}

// Edit Service name

module.exports.editServiceName = async (event, context, callback) => {
    
    const id = event.pathParameters.editServiceN_id;
    const email_path = event.body;
    const email = JSON.parse(email_path);
    const response = {
        statusCode: 200,
        body:JSON.stringify(`edit user email: ${email.email} by Id: ${id}`)
    }

    return response;
}

// Edit Service name

module.exports.editServicePass = async (event, context, callback) => {
    
    const id = event.pathParameters.editServiceP_id;
    const email_path = event.body;
    const email = JSON.parse(email_path);
    const response = {
        statusCode: 200,
        body:JSON.stringify(`edit user email: ${email.email} by Id: ${id}`)
    }

    return response;
}


// Edit Service name

module.exports.editServiceBio = async (event, context, callback) => {
    
    const id = event.pathParameters.editServiceB_id;
    const email_path = event.body;
    const email = JSON.parse(email_path);
    const response = {
        statusCode: 200,
        body:JSON.stringify(`edit user email: ${email.email} by Id: ${id}`)
    }

    return response;
}
