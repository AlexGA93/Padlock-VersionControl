'use strict';
// const connectDB = require("./db/mongodb/mongodb");
// const User = require('./db/models/user');



module.exports.getUser = async (event) => {

    const id = event.pathParameters.user_id;
    const response = {
        statusCode: 200,
        body:JSON.stringify(id)
    }

    return response;
}

module.exports.newUser = async (event) => {
    // connectDB();
    // User.find(); 
    const body = event.body;

    const response = {
        statusCode: 200,
        body:JSON.stringify(JSON.parse(body))
    }

    return response;
}

module.exports.deleteUser = async (event) => {

    const id = event.pathParameters.user_id;
    const response = {
        statusCode: 200,
        body:JSON.stringify(`deleting user by ${id}`)
    }

    return response;
}

module.exports.editUserEmail = async (event) => {
    
    const id = event.pathParameters.editUserE_id;
    const email_path = event.body;
    const email = JSON.parse(email_path);
    const response = {
        statusCode: 200,
        body:JSON.stringify(`edit user email: ${email.email} by Id: ${id}`)
    }

    return response;
}

module.exports.editUserPass = async (event) => {
    
    const id = event.pathParameters.editUserP_id;
    const pass_path = event.body;
    const pass = JSON.parse(pass_path);

    const response = {
        statusCode: 200,
        body:JSON.stringify(`edit user password: ${pass.pass} by Id: ${id}`)
    }

    return response;
}