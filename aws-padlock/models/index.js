
// global models script to deal with roles and models
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require('./user');
db.service = require('./service');


module.exports = db;