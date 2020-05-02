const db = require("../models")

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
}