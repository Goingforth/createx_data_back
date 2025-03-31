const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    call: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
    }

},
    {
        collection: 'offices'
    }
);

const Offices = mongoose.model('offices', schema);

module.exports = Offices;