const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vacanciesSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    meta: {
        location: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }
    },
    position: {
        type: String,
        required: true,
    },


}, {
    collection: 'vacancies'
});

const Vacancies = mongoose.model('vacancies', vacanciesSchema);

module.exports = Vacancies;