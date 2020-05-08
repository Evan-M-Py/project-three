const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./models')
const passport = require('passport')
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

app.use(passport.initialize())
require('./config/passport');

//Static directory
app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });

//Routes
require("./routes/inventoryAPI")(app);
require("./routes/expenseAPI")(app);
require("./routes/userAPI")(app);
require("./routes/truckAPI")(app);
require("./routes/chartAPI")(app);

//NEW ROUTE STRUCTURE
// const userRoutes = require('./routes/user-routes');
// app.use('api/users', userRoutes);




db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function () {


        console.log(`Listening on port ${PORT}`)
    });
}); 