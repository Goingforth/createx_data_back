const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
    option: {
        type: String,
        required: true,
    }
},
    {
        collection: 'locations'
    }
);

const Locations = mongoose.model('locations', schema);

module.exports = Locations;