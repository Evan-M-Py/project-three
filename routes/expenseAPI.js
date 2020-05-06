const Expense = require("../models/Expense");

module.exports = function (app) {
    app.post("/api/expense", function (req, res) {
        Expense.create(req.body).then(function (crusine_db) {
            // res.json(crusine_db);
        });

    });

    app.get("/api/expense/:truckID", function (req, res) {
        db.Inventory.findAll({
            where: {
                userID: req.params.truckID
              }
        }).then(function (crusine_db) {
            // returns a JSON object with table contents?????

            res.json(crusine_db);
        });
    });
}