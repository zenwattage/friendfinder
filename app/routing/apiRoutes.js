//routes for data
var friends = require('../data/friends.js');
//path routes
var path = require('path');
//determine which data the user sees and is allowed to post to our server


//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
module.exports = function (app) {
    app.get('/data/friends', function (req, res) {
        return res.json(friends);

    });


    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var nextUser = req.body;

        var userScores = nextUser.scores;

        var matchedBuddy = "";

        var buddyImage = "";

        var comparison = 9999999999;

        for (var i = 0; i < friends.length; i++) {
            var comp = 0;
            //console.log(userScores);
            for (var j = 0; j < userScores.length; j++) {
                comp += Math.abs(friends[i].scores[i] - userScores[j])

            }
            if (comp < comparison) {
                comparison = comp;
                matchedBuddy = friends[i].name;
                buddyImage = friends[i].photo;
            }
        }

        friends.push(nextUser);

        //console.log(matchedBuddy);

        res.json(
            {
                status: 'OK',
                matchedBuddy: matchedBuddy,
                buddyImage: buddyImage
            });
    })
}

//* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
