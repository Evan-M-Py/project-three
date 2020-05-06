require('dotenv').config()
const db = require("../models")
const passport = require('passport');

module.exports = function (app) {
    //User API routes go here
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
        const data = res.req.user;
        if (data === "notUser") {
            res.json({ msg: "notUser" })
        } else if (data === "wrongPassword") {
            res.json({ msg: "wrongPassword" });
        } else {
            res.status(200).json(req.user.dataValues);
        }
    })
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
}