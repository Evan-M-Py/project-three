const Expense = require("../models/Expense");

module.exports = function(app) {
    app.post("/api/Expense", function(req, res) {
        Expense.create(req.body).then(function(cruisine_db) {
            // res.json(cruisine_db);
          });
    
      });
    
      app.get("/api/Expense", function(req, res) {
        Expense.findAll({}).then(function(cruisine_db) {
          // returns a JSON object with table contents?????
          
          res.json(cruisine_db);
        });
      });
}