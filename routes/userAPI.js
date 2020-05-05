require('dotenv').config()
const db = require("../models")
<<<<<<< HEAD
const jwt = require('jsonwebtoken')
=======
const passport = require('passport');
>>>>>>> 4107df99d90f5bb095817c43944c5d5c54020e70

module.exports = function (app) {
    //User API routes go here
<<<<<<< HEAD
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
=======
    app.post("/api/createuser", function (req, res) {
        console.log("New User:")
        console.log(req.body)
        db.Truck.create({
            truckName: req.body.truckName
        }).then(truck => {
            db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            }).then(user => {
                // This sends back the new user and truck data as an object
                // Now we can save this in state
                console.log(user.dataValues.id);
                return res.json({user, truck});
            })
        })
    })
    app.post('/login', passport.authenticate('local'), (req, res) => {
        // console.log(req.user)
        res.status(200).json(req.user.dataValues);
    })
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
>>>>>>> 4107df99d90f5bb095817c43944c5d5c54020e70
}