//routes for data
var friends = require('../data/friends.js');
//determine which data the user sees and is allowed to post to our server


//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
module.exports = function(app) {

    app.get('/api/friends', function(req, res) {

        return res.json(friends);
        
    });


    app.post("/api/friends", function(req, res) {

        var newUser = req.body;

        //iterate over scores and convert each to integer
        for(var i = 0; i < newUser.scores.length; i++) {
            newUser.scores[i] = parseInt(newUser.scores[i]);
        }

        var matchedBuddy;
        
        var topScore = 999999;
        
        var diffArray = [];

        for(var i = 0; i < friends.length; i++) {

            var currentBuddy = friends[i].scores;
            console.log(currentBuddy);
            for(var j = 0; j < currentBuddy.length; j++){
                
            diffArray.push(Math.abs(currentBuddy[j] - newUser.scores[j]));
                //(total,amount)
            var currentTotal = diffArray.reduce((total, amount) => total + amount);

            }

            diffArray = [];

            if (currentTotal < topScore) {

                currentTotal = topScore;
                matchedBuddy = friends[i];
            }
        }

        friends.push(newUser);

        console.log(matchedBuddy);

        res.json(matchedBuddy);
    });
};

//* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
