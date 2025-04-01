const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaBenefit = new Schema({
    id: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

},
);
// title: "Our benefits",
//     subTitle:
// "Our mission is to set the highest standards for construction sphere.",
//     theme: "light",
//         dataArray: dataBenefitsDesign,
const schemaBenefits = new Schema({
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    theme: {
        type: String,
        required: true,
    },
    dataArray: [schemaBenefit]

},
);
const schema = new Schema({
    page: {
        type: String,
        required: true,
    },
    props: schemaBenefits
},
    {
        collection: 'benefits'
    }
);
const Benefits = mongoose.model('benefits', schema);

module.exports = Benefits;