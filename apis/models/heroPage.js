const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    page: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: false,
    },
    bgImage: {
        type: String,
        required: false,
    }
},
    {
        collection: 'heroPages'
    }
);

const HeroPages = mongoose.model('heroPages', schema);

module.exports = HeroPages;