const userModel = require("../models/schemas/UserInfo/user");

module.exports = {
    "registration": async(body) => {
        try {
            let registerData = await new userModel(body).save();
            if (!registerData || registerData === null) {
                return {
                    "status": false,
                    "message": "Registration failed,please try again."
                }
            }
            return {
                "status": true,
                "message": "Registration successful."
            }
        } catch (error) {
            return {
                "status": false,
                "message": `${error}`
            }
        }
    },
}