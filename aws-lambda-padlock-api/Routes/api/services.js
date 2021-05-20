'use strict';
const connectDB = require('../../db/mongodb/mongodb');
const Service = require('../../db/models/service');


// Get current service

module.exports.getCurrentService =  (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const id = event.pathParameters.service_id;

    connectDB()
    .then(() => {
        Service
        .findById(id)
        .then(service => callback(null,
            {
                statusCode: 200,
                body: JSON.stringify(service)
            })
        )
        .catch(err => callback(null, 
            {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not fetch the user.'
            })
        )
    })
}


// Add a new service

module.exports.newService = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop  = false;
    const {user, name, password, description, date} = JSON.parse(event.body);
    const newService = new Service({user, name, password, description, date});

    connectDB()
    const service = await newService.save();
    if (service){
        callback(null, {
            statusCode: 200,
            body: 'New service inserted!'
        });
    }else{
        callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not fetch the new service.'
        });
    }
}

// Delete Current Service

module.exports.deleteService =  (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop  = false;
    const id = event.pathParameters.service_id;

    connectDB()
    .then(() => {
        Service
        .deleteOne({_id:id})
        .then(() => {
            callback(null, {
                statusCode: 200,
                body: 'Service deleted successfully!' // JSON.stringify(deleted)
            })
        })
        .catch(err => {
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not delete service selected.'
            })
        })
    });
}

// Edit Service name

module.exports.editServiceName =  (event, context, callback) => {
    
    context.callbackWaitsForEmptyEventLoop = false;

    const id = event.pathParameters.editServiceN_id;
    const name_path = event.body;
    const name = JSON.parse(name_path);

    connectDB()
    .then(() => {
        Service
        .findByIdAndUpdate(id, name,{new:true})
        .then(() => callback(null, {
            statusCode: 200,
            body: 'Service name modified successfully!' // JSON.stringify(updated_N)
        }))
        .catch(err => callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not update the service name.'
        }));
    });
}

// Edit Service name

module.exports.editServicePass =  (event, context, callback) => {
        
    context.callbackWaitsForEmptyEventLoop = false;

    const id = event.pathParameters.editServiceP_id;
    const pass_path = event.body;
    const pass = JSON.parse(pass_path);

    connectDB()
    .then(() => {
        Service
        .findByIdAndUpdate(id, pass,{new:true})
        .then(() => callback(null, {
            statusCode: 200,
            body: 'Service password modified successfully!' // JSON.stringify(updated_P)
        }))
        .catch(err => callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not update the service password.'
        }));
    });
}


// Edit Service name

module.exports.editServiceBio =  (event, context, callback) => {
           
    context.callbackWaitsForEmptyEventLoop = false;

    const id = event.pathParameters.editServiceB_id;
    const bio_path = event.body;
    const bio = JSON.parse(bio_path);

    connectDB()
    .then(() => {
        Service
        .findByIdAndUpdate(id, bio,{new:true})
        .then(() => callback(null, {
            statusCode: 200,
            body: 'Service description modified successfully!' // JSON.stringify(updated_P)
        }))
        .catch(err => callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not update the service description.'
        }));
    });
}
