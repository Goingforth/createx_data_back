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
    bgHoverImage: {
        type: String,
        required: false,
    },
    to: {
        type: String,
        required: true,
    },
},
    {
        collection: 'servicesItem'
    }
);

const ServicesItem = mongoose.model('servicesItem', schema);

module.exports = ServicesItem;