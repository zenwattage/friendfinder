//routes for data
var friends = require('../data/friends.js');
//path routes
var path = require('path');
//determine which data the user sees and is allowed to post to our server


//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
module.exports = function(app) {
    app.get('/data/friends', function(req, res) {
        return res.json(friends);
        
    });


    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        var nextUser = req.body;

        var userScores = nextUser.scores;


        var matchedBuddy = "";
        var buddyImage = "";
        var diffArray = [];
        for(var i = 0; i < friends.length; i++) {
            var currentBuddy = friends[i].scores;
            console.log(currentBuddy);
            for(var j = 0; j < currentBuddy.length; j++){
                
            diffArray.push(Math.abs(currentBuddy[j] - nextUser.scores[j]));
            var currentTotal = diffArray.reduce((a,b) => a + b)

            }
            if (currentTotal < topScore) {
                currentTotal = topScore;
                matchedBuddy = friends[i];
            }
        }

        friends.push(nextUser);

        console.log(matchedBuddy);

        res.json(matchedBuddy);
    })
}

//* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
