const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    comments: [{
        name: { type: String, required: true },
        replyName: { type: String, required: false },
        comment: { type: String, required: true },
        date: { type: Date, required: true },
    }],
    text: {
        type: String,
        required: true,
    }
},
    {
        collection: 'news'
    }
);

const News = mongoose.model('news', schema);

module.exports = News;


