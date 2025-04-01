const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        required: true,
    },
    item: {
        type: String,
        required: true,
    },
    basic: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    standart: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    business: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
},
    {
        collection: 'tablePricing'
    }
);

const TablePricing = mongoose.model('tablePricing', schema);

module.exports = TablePricing;