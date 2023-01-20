const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const urls = require("./urls");
const userService = require("../service/user");

module.exports = () => {
    router.post(urls.REGISTRAION_URL, async(req, res, next) => {
        try {
            let id = crypto.randomBytes(5).toString("hex");

            let userRegistrtaionData = {
                "id": id,
                "name": req.body.name
            };
            const getRegistration = await userService.registration(userRegistrtaionData);
            if (getRegistration.status === false) {
                res.json({
                    "status": getRegistration.status,
                    "message": getRegistration.message
                })
            } else {
                res.json({
                    "status": getRegistration.status,
                    "message": getRegistration.message
                })
            }

        } catch (error) {
            next(error);
        }
    });

    return router;
}