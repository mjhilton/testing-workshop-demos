var express = require('express');
var app = express();
var flatFileDb = require('flat-file-db');
var routes = require('./routes');
var port = process.env.PORT || 8080;

// Set up public directory to serve files
app.use(express.static(__dirname + '/public'));

// Set up routes
routes(app);

// Start the database
flatFileDb.sync('./data/db.json');

// Start the server
app.listen(port);
console.log("App listening on port " + port);