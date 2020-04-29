const Inventory = require("../models/Inventory");

module.exports = function(app) {
    // POST route for saving a new inventory item. We can create todo with the data in req.body
  app.post("/api/Inventory", function(req, res) {
    console.log(req.body)
    // Inventory.create(req.body).then(function(cruisine_db) {
    //     // res.json(cruisine_db);
        
    //   });

  });

  app.get("/api/Inventory", function(req, res) {
    Inventory.findAll({}).then(function(cruisine_db) {
      // returns a JSON object with table contents?????
      
      res.json(cruisine_db);
    });
  });

}