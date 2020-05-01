// const Truck = require("../models/Truck");
const db = require("../models")
module.exports = function(app) {
    //Truck API routes go here
    app.post("/truck", function(req, res) {
        db.Truck.create({
            truck_name: req.body.truckName
        }).then(response => {
            res.json(true);
        })
    })
}