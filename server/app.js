var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Routers
//index and other page like about, contact, etc
var pageRouter = require('./routes/pageRoutes.js');
//messages
var classRouter = require('./routes/classRoutes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());


// Set up our routes
app.use("/", pageRouter);
app.use("/classes", classRouter);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

