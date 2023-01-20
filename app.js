const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
let PORT = process.env.PORT;
let db = require("./config/database")();
let rooteController = require('./controller/index')();

const corsOptions = {
    "origin": "*",
    "credentials": true,
    "optionSuccessStatus": 200
};

Promise.all([db]).then(([db]) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(cors(corsOptions));
    app.use("/api", rooteController);
    app.listen(PORT, () => {
        console.log(`The server is listening on port ${PORT}`);
    });
});