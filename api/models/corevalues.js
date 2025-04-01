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
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
},
    {
        collection: 'corevalues'
    }
);

const Corevalues = mongoose.model('corevalues', schema);

module.exports = Corevalues;