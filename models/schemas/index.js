module.exports = (db) => {
    if (db) {
        let userSchema = require("./UserInfo/user");
        user = db.connection.model("users", userSchema);
    }
}