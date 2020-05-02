const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./models')

//Set up the Express app
const app = express();
const PORT = process.env.PORT || 8080;

//Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


//Static directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

//Routes
require("./routes/inventoryAPI")(app);
require("./routes/expenseAPI")(app);
require("./routes/userAPI")(app);
require("./routes/truckAPI")(app);

//NEW ROUTE STRUCTURE
// const userRoutes = require('./routes/user-routes');
// app.use('api/users', userRoutes);



db.sequelize.sync({ force: true }).then(()=>{
  app.listen(PORT, function(){

    console.log(`Listening on port ${PORT}`)
});
});