const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    rate: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    }
},
    {
        collection: 'statistics'
    }
);

const Statistics = mongoose.model('statistics', schema);

module.exports = Statistics;