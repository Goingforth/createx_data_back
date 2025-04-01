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
    title: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: false,
    }
},
    {
        collection: 'sliderHero'
    }
);

const SliderHero = mongoose.model('sliderhero', schema);

module.exports = SliderHero;