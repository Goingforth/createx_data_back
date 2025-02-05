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
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    }
},
    {
        collection: 'portfolioCard'
    }
);

const PortfolioCard = mongoose.model('portfolio_card', schema);

module.exports = PortfolioCard;