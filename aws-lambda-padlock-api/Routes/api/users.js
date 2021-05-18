'use strict';
const connectDB = require("../../db/mongodb/mongodb");
const User = require('../../db/models/user');



module.exports.getCurrentUser =  (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const id = event.pathParameters.user_id;
    
    connectDB()
    .then(() => {
        User
        .findById(id)
        .then(users => callback(null, {
            statusCode: 200,
            body: JSON.stringify(users)
        }))
        .catch(err => callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not fetch the user.'
        }));
    });
}

module.exports.newUser = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop  = false;
    const {name, email, password, age} = JSON.parse(event.body);
    const newUser = new User({name, email, password, age});

    connectDB()
    const usuario = await newUser.save();
    if (usuario){
        callback(null, {
            statusCode: 200,
            body: 'insertado'
        });
    }else{
        callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not fetch the user.'
        });
    }
}

module.exports.deleteUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop  = false;
    const id = event.pathParameters.user_id;

    connectDB()
    .then(() => {
        User
        .deleteOne({_id:id})
        .then(deleted => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(deleted)
            })
        })
        .catch(err => {
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not delete the user.'
            })
        })
    });
}

module.exports.editUserEmail =  (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const id = event.pathParameters.editUserE_id;
    const email_path = event.body;
    const email = JSON.parse(email_path);

    connectDB()
    .then(() => {
        User
        .findByIdAndUpdate(id, email,{new:true})
        .then(updated_E => callback(null, {
            statusCode: 200,
            body: JSON.stringify(updated_E)
        }))
        .catch(err => callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not update the user email.'
        }));
    });

    
}

module.exports.editUserPass = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const id = event.pathParameters.editUserP_id;
    const pass_path = event.body;
    const password = JSON.parse(pass_path);

    connectDB()
    .then(() => {
        User
        .findByIdAndUpdate(id, password,{new:true})
        .then(updated_P => callback(null, {
            statusCode: 200,
            body: JSON.stringify(updated_P)
        }))
        .catch(err => callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not update the user password.'
        }));
    });

}