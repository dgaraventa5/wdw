// Require the Express Module
var express = require('express');
//Require the Mongoose Module
var mongoose = require('mongoose');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Require path
var path = require('path');
//For loading model files
var fs = require('fs')
//For session data
var session = require('express-session')
var sessionConfig = {
	secret: 'CookieMonster',
	resave: true,
	saveUninitialized: true,
	name: 'myCookie',
	cookie: {
		secure: false,
		httpOnly: false,
		maxAge: 3600000
	}
}

// Create an Express App
var app = express();

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client')));
//Use session
app.use(session(sessionConfig))

//Load models
require('./server/config/mongoose.js')

//Connect to routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})