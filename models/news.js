const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    key: {
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
    comments: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }



},
    {
        collection: 'news'
    }
);

const News = mongoose.model('news', newsSchema);

module.exports = News;


