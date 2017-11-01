const bodyParser = require('body-parser');

/// /require('dotenv').config()
const express = require('express');
const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
const cors = require('cors');

const port = process.env.PORT || 8445;

const app = express();
app.set('port', port);
app.listen(app.get('port'));

var corsOptions = {
  origin: ['http://localhost:8080'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true
};
app.use(cors(corsOptions));
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride());

// route to test if the user is logged in or not
app.get('/test', (req, res) => {
  res.json('it works!');
});

var sweeptakes = [
  {
    id: 1,
    name: 'Sweepstake 1'
  },
  {
    id: 2,
    name: 'Sweepstake 2'
  }
]

app.get('/sweepstakes', (req, res) => {
  res.json({
    sweeptakes
  });
});


console.log('Magic happens on port ' + port);