//routes for data
var friendData = require('../data/friends.js');
//determine which data the user sees and is allowed to post to our server


//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
module.exports = function(app) {
    app.get('/data/friends', function(req, res) {
        res.json(friendData);
        
    })
}

//* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
