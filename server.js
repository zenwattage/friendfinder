//dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

//setup express app
var app = express();
var PORT = process.env.PORT || 8080;


//set up express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//inclue route files
require('./app/routing/htmlRoutes.js')(app);

//start server listnening on port 8080
app.listen(PORT, function () {
    console.log("FriendFinder listening on PORT" + PORT);
});