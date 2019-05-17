//dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

//setup express app
var app = express();
var PORT = process.env.PORT || 8080;


app.get('/', function(req, res) {
    res.send('Hello World!');
})

//set up express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted: Hello World\n')
    res.end(JSON.stringify(req.body, null, 2))
})

//start server listnening on port 8080
app.listen(PORT, function () {
    console.log("FriendFinder listening on PORT" + PORT);
});