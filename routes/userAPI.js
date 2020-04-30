const db = require("../models")

module.exports = function(app) {
    //User API routes go here
    app.post("/api/createuser", function(req, res) {
        console.log("New User:");
        console.log(req.body);
        db.User.create({
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            phone: req.body.phoneNumber,
            email: req.body.email,
            username: req.body.username,
            user_pass: req.body.password
        }).then(response => {
            res.json(true);
        })
    })
}