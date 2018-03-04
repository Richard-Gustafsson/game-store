//server.js
'user strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

//db config
var mongoDB = 'mongodb://127.0.0.1/game-store';
mongoose.connect(mongoDB);

mongoose.connection.once('open', function() {
  console.log('Connection to database  = Great success :D');
}).on('error', function() {
  console.log('Connection failed to mongoDB');
})

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//  res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
//  res.setHeader(‘Access-Control-Allow-Credentials’, ‘true’);
//  res.setHeader(‘Access-Control-Allow-Methods’, ‘GET,HEAD,OPTIONS,POST,PUT,DELETE’);
//  res.setHeader(‘Access-Control-Allow-Headers’, ‘Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers’);
//
//  res.setHeader(‘Cache-Control’, ‘no-cache’);
//  next();
// });

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

app.use('/api', router);

app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
