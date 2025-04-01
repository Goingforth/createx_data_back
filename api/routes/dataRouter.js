const express = require("express");

const dataRouter = express.Router();

//const ctrl = require("../controllers/dataController");
const ctrlNews = require("../controllers/newsController");
// const { authToken } = require("../middlewares/auth-middleware");
dataRouter.get('/', (req, res) => {
    res.send("data Ok!");
    res.end();
});

// dataRouter.get('/team', ctrl.dataTeam);
// dataRouter.get('/history', ctrl.dataHistory);
// dataRouter.get('/vacancies', ctrl.dataVacancies);
// dataRouter.get('/statistics', ctrl.dataStatistics);
// dataRouter.get('/testimonials', ctrl.dataTestimonials);
// dataRouter.get('/table_pricing', ctrl.dataTablePricing);
// dataRouter.get('/portfolio_card', ctrl.dataPortfolioCard);
// dataRouter.get('/services', ctrl.dataServices);
// dataRouter.get('/services_item', ctrl.dataServicesItem);
// dataRouter.get('/slider_hero', ctrl.dataSliderHero);
// dataRouter.get('/steps', ctrl.dataSteps);
// dataRouter.get('/clients_logo', ctrl.dataClientsLogo);
// dataRouter.get('/corevalues', ctrl.dataCorevalues);
// dataRouter.get('/locations', ctrl.dataLocations);
// dataRouter.get('/hero_page', ctrl.dataHeroPages);
// dataRouter.get('/projects', ctrl.dataProjects);
// dataRouter.get('/media_tabs', ctrl.dataMediaTabs);
// dataRouter.get('/gallerys', ctrl.dataGalleryByName);
// dataRouter.get('/benefits', ctrl.dataBenefitsByName);
// dataRouter.get('/offices', ctrl.dataOffices);


dataRouter.get("/news/:id", ctrlNews.dataNewsByID);
dataRouter.get("/news", ctrlNews.dataNews);
dataRouter.post("/news/comments/:id", ctrlNews.postCommentByIdNews);

dataRouter.post("/news/comments/reply/:id", ctrlNews.postCommentReplyByIdNews);

module.exports = dataRouter;