const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./models')
const passport = require('passport')
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize())
require('./config/passport');


app.use(express.static(path.join(__dirname, 'public')));


//Routes
require("./routes/inventoryAPI")(app);
require("./routes/expenseAPI")(app);
require("./routes/userAPI")(app);
require("./routes/truckAPI")(app);
require("./routes/chartAPI")(app);



db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, function () {


        console.log(`Listening on port ${PORT}`)
    });
}); 