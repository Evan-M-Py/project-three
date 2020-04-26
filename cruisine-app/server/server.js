const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('../models')

//Set up the Express app
const app = express();
const PORT = process.env.PORT || 8080;

//Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

//Routes
require("./routes/userAPIs.js")(app);

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
});