//dependencies
var express = require('express');
var path = require('path');

//setup express app
var app = express();
var PORT = 3000;

//set up express app to handle data parsing
app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());


app.get('/', function(req, res) {
    res.send('Hello World!');
})


//start server listnening on port 3000
app.listen(PORT, function() {
    console.log("FriendFinder listening on PORT" + PORT);
});