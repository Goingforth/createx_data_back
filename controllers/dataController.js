const Team = require('../models/team');
const History = require('../models/history');
const Vacancies = require("../models/vacancies");
const Statistics = require("../models/statistics");
const Testimonials = require("../models/testimonials");
const TablePricing = require("../models/tablePricing");
const PortfolioCard = require("../models/portfolioCard");
const Services = require("../models/services");
const ServicesItem = require("../models/servicesItem");
const SliderHero = require("../models/sliderHero");
const Steps = require("../models/steps");
const ClientsLogo = require("../models/clientsLogo");
const Corevalues = require("../models/corevalues");
const Locations = require("../models/locations");
const HeroPages = require("../models/heroPage");
const Projects = require("../models/projects");
const MediaTabs = require("../models/mediaTabs");
const Gallery = require("../models/gallerys");
const Benefits = require("../models/benefits");
// const { ctrlWrapper } = require("../helpers/coreValues");


// const mongoose = require("mongoose");

const dataTeam = async (req, res, next) => {
    try {
        const data = await Team.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataHistory = async (req, res, next) => {
    try {
        const data = await History.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};

const dataVacancies = async (req, res, next) => {
    try {
        const data = await Vacancies.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataStatistics = async (req, res, next) => {
    try {
        const data = await Statistics.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataTestimonials = async (req, res, next) => {
    try {
        const data = await Testimonials.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataTablePricing = async (req, res, next) => {
    try {
        const data = await TablePricing.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataPortfolioCard = async (req, res, next) => {
    try {
        const data = await PortfolioCard.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataServices = async (req, res, next) => {
    try {
        const data = await Services.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataServicesItem = async (req, res, next) => {
    try {
        const data = await ServicesItem.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataSliderHero = async (req, res, next) => {
    try {
        const data = await SliderHero.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataSteps = async (req, res, next) => {
    try {
        const data = await Steps.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataClientsLogo = async (req, res, next) => {
    try {
        const data = await ClientsLogo.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataCorevalues = async (req, res, next) => {
    try {
        const data = await Corevalues.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataLocations = async (req, res, next) => {
    try {
        const data = await Locations.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataMediaTabs = async (req, res, next) => {
    try {
        const data = await MediaTabs.find();
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataHeroPages = async (req, res, next) => {
    try {
        const { page } = req.query;
        const data = await HeroPages.findOne({ page: page });
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataProjects = async (req, res, next) => {
    try {
        const { page } = req.query;
        const data = await Projects.findOne({ page: page });
        res.json(data);
    }
    catch (error) {
        next(error);
    }
};
const dataGalleryByName = async (req, res, next) => {
    try {
        const { name } = req.query;

        const data = await Gallery.findOne({ name: name });
        res.json(data.gallery);
    }
    catch (error) {
        next(error);
    }
};
const dataBenefitsByName = async (req, res, next) => {
    try {
        const { page } = req.query;

        const data = await Benefits.findOne({ page: page });
        res.json(data.props);
    }
    catch (error) {
        next(error);
    }
};

module.exports = {
    dataTeam,
    dataHistory,
    dataVacancies,
    dataStatistics,
    dataTestimonials,
    dataTablePricing,
    dataPortfolioCard,
    dataServices,
    dataServicesItem,
    dataSliderHero,
    dataSteps,
    dataClientsLogo,
    dataCorevalues,
    dataLocations,
    dataHeroPages,
    dataProjects,
    dataMediaTabs,
    dataGalleryByName,
    dataBenefitsByName
};