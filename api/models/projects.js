const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
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
        required: true,
    },
    info: {
        location: {
            type: String,
            required: true,
        },
        client: {
            type: String,
            required: true,
        },
        architect: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        completed: {
            type: String,
            required: true,
        }
    }
},
    {
        collection: 'projects'
    }
);

const Projects = mongoose.model('projects', schema);

module.exports = Projects;