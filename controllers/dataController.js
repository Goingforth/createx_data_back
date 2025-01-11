// const Team = require('../models/team');
const Team = require('../models/team');
const News = require('../models/news');
// const { ctrlWrapper } = require("../helpers/ctrlWrapper");
const mongoose = require("mongoose");

const dataTeam = async (req, res, next) => {
    try {
        const team = await Team.find();
        res.json(team);
    }
    catch (error) {
        next(error);
    }
};
const dataNews = async (req, res, next) => {
    try {
        const news = await News.find();
        res.json(news);
    }
    catch (error) {
        next(error);
    }
};
module.exports = {
    dataTeam,
    dataNews
};