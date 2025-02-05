const News = require('../models/news');
const qs = require('qs');

const dataNews = async (req, res, next) => {
    const { limit, categories } = qs.parse(req.query);
    let data;
    try {
        if (limit !== undefined) {
            data = await News.find({}).limit(limit);
        }
        if (categories !== undefined) {
            data = await News.find(categories.includes("All News") && categories.length === 1 ? {} : { categories: categories });
        }


        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataNewsByID = async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    console.log(req.params.id);

    try {

        const data = await News.findById(id);

        res.json(data);
    }
    catch (error) {
        next(error);
    }
};

module.exports = {
    dataNews,
    dataNewsByID
};