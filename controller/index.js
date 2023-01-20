const express = require("express");
const router = express.Router();
const userController = require("./user")();

module.exports = () => {
    // router.use("/admin");
    router.use("/user", userController);
    router.get("/hello", async(req, res) => {
        res.json("hello");
    })

    return router;
}