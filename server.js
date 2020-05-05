const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./models')
<<<<<<< HEAD
// import passport from 'passport';
// const jwt = require('jwt');

=======
const passport = require('passport')
>>>>>>> 4107df99d90f5bb095817c43944c5d5c54020e70
//Set up the Express app
const app = express();
const PORT = process.env.PORT || 8080;

// require('./config/passportbcrypt');

//Set up Express to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
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

//NEW ROUTE STRUCTURE
// const userRoutes = require('./routes/user-routes');
// app.use('api/users', userRoutes);




db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function () {


        console.log(`Listening on port ${PORT}`)
    });
}); 