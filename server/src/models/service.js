const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
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

module.exports = Service = mongoose.model('services', serviceSchema);