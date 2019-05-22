//dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

//setup express app
var app = express();
var PORT = process.env.PORT || 3000;


//set up express app to handle data parsing
// app.use(express.urlencoded({
//     extended: true
// }));

//app.use(express.json());

// i dont know why we're using bodyparser instead of express
//the example showed us bodyparser but express seemed to be 
//already doing what bodyparser was being used for?

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//inclue route files
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


//start server listnening on port 8080
app.listen(PORT, function () {
    console.log("FriendFinder listening on PORT" + PORT);
});