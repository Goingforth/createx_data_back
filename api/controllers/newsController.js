const News = require('../models/news');
const qs = require('qs');
const { ObjectId } = require('mongodb');

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
    try {

        const data = await News.findById(id);

        res.json(data);
    }
    catch (error) {
        next(error);
    }
};

const postCommentByIdNews = async (req, res, next) => {
    const id = req.params.id;
    const newPost = req.body;
    try {
        const news = await News.findById(id);
        news.comments = [...news.comments, newPost];
        await news.save();

        res.json(news.comments);
    }
    catch (error) {

        next(error);
    }
};
// const postCommentReplyByIdNews = async (req, res, next) => {
//     const idComment = req.params.id;
//     const reply = req.body;
//     try {
//         await News.updateOne({ "comments._id": idComment }, {
//             $push: {
//                 "comments.replyes": reply
//                 // "comments.$.replyes": reply
//             }

//         });
//         // res.json("ok");
//         res.json({ reply, idComment });

//     }
//     catch (error) {
//         next(error);
//     }
// };

module.exports = {
    dataNews,
    dataNewsByID,
    postCommentByIdNews,
    // postCommentReplyByIdNews
};
