const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const dataRouter = require("./routes/dataRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/data", dataRouter)

app.use((req, res) => {
    res.status(404).json({ message: "This is site createx-back.Welcome!" });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

module.exports = app;