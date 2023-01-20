const mongoose = require("mongoose");
require("dotenv").config();
const connectionUri = process.env.DB_CONNECTION;
const TAGS = process.env.TAGS;

const dbConnection = async() => {
    try {
        let connection = await mongoose.createConnection(connectionUri);
        connection.on("open", () => {
            console.info(`Connection established ${TAGS}`);
        });

        connection.on("reconnected", () => {
            console.info(`mongodb reconnected ${TAGS}`);
        })

        connection.on("disconnected", () => {
            console.info(`mongodb disconnected ${TAGS}`);
        })

        return connection;

    } catch (error) {
        console.error(`Connection error:${error}`);
    }

};

module.exports = dbConnection;