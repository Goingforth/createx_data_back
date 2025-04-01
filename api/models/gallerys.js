const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaGallery = new Schema({
    id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

},
);
const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    gallery: {
        full: [schemaGallery],
        mini: [schemaGallery]
    },


},
    {
        collection: 'gallerys'
    }
);
const Gallerys = mongoose.model('gallerys', schema);

module.exports = Gallerys;