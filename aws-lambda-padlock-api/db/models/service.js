const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;