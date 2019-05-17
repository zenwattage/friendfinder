//help direct user 
//when user clicks link
//the routing will determine which pages is delivered to the user 



var path = require('path');

module.exports = function (app) {

  //* A default, catch-all route that leads to `home.html` which displays the home page.
  app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });


  //* A GET Route to `/survey` which should display the survey page.

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  app.use( function(req, res) {
    res.sendFile(path.join(__dirname + '../public/home.html'))
  })

}

