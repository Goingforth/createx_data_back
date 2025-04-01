const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
    iconID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
},
    {
        collection: 'mediaTabs'
    }
);

const MediaTabs = mongoose.model('mediaTabs', schema);

module.exports = MediaTabs;