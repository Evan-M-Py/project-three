const db = require("../models")
const passport = require('passport');

module.exports = function(app) {
    //User API routes go here
    app.post("/api/createuser", function(req, res) {
        console.log("New User:")
        console.log(req.body)
        db.Truck.create({
            truck_name: req.body.truckName
        }).then(response => {
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
    })
    app.post('/login', passport.authenticate('local'), (req, res) => {
        // console.log(req.user)
        res.status(200).json(req.user.dataValues);
    })
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
}