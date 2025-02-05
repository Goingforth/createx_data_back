const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
    number: {
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
    }
},
    {
        collection: 'steps'
    }
);

const Steps = mongoose.model('steps', schema);

module.exports = Steps;