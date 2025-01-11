const express = require("express");

const dataRouter = express.Router();

const ctrl = require("../controllers/dataController")

// const { authToken } = require("../middlewares/auth-middleware");
dataRouter.get('/', (req, res) => {
    res.send("data data");
    res.end();
});

dataRouter.get('/team', ctrl.dataTeam);
dataRouter.get('/news', ctrl.dataNews);


module.exports = dataRouter;