const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    }
},
    {
        collection: 'clientsLogo'
    }
);

const ClientsLogo = mongoose.model('clientsLogo', schema);

module.exports = ClientsLogo;