module.exports = function(app) {
const user = require("../../models/User.js");
const truck = require("../../models/Truck.js");
    //User API routes go here
    app.post("/api/createuser", function(req, res) {
        console.log("New User:")
        console.log(req.body)
        truck.create({
            truck_name: req.body.truckName
        }).then(response => {
            user.create({
                firstname: req.body.firstName,
                lastname: req.bodt.lastName,
                phone: req.body.phoneNumber,
                email: req.body.email,
                username: req.body.username,
                user_pass: req.body.password
            }).then(response => {
                response.redirect("/dashboard");
            })
        })
        
    })
}