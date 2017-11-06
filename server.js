var express = require('express');
var app = express();
var db = require('./src/data-service');
var routes = require('./routes');
var config = require('./index');

// Set up public directory to serve files
app.use(express.static(__dirname + '/public'));

// Set up routes
routes(app);

// Start the server
app.listen(config.port);
console.log("App listening on port " + config.port);

module.exports = app;