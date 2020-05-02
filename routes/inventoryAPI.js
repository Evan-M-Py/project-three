const db = require("../models");

module.exports = function (app) {
    // POST route for saving a new inventory item. We can create todo with the data in req.body
    app.post("/api/Inventory", function (req, res) {
        console.log(req.body)
        db.Inventory.create(req.body).then(function (crusine_db) {
            res.json(crusine_db);

        });

    });

    app.get("/api/Inventory", function (req, res) {
        db.Inventory.findAll({}).then(function (crusine_db) {
            // returns a JSON object with table contents?????

            res.json(crusine_db);
        });
    });

}