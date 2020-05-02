require('dotenv').config()
const db = require("../models")
const jwt = require('jsonwebtoken')

module.exports = function(app) {
    //User API routes go here
    app.post("/signup", function(req, res) {
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
            const username = req.body.username
            const user = { name: username }
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken });
        })
    })
    app.post("/", function(req, res) {
        const username = req.body.username
        const user = { name: username }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken: accessToken });
    })
}