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
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    social: {
        linkedin: {
            type: String,
            required: true,
        },
        twitter: {
            type: String,
            required: true,
        },
        facebook: {
            type: String,
            required: true,
        },
    },

}, {
    collection: 'team'
});

const Team = mongoose.model('team', schema);

module.exports = Team;

