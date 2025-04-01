const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: true,
    }
},
    {
        collection: 'services'
    }
);

const Services = mongoose.model('services', schema);

module.exports = Services;