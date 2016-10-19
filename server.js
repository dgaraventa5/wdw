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
var passport = require("passport");
var FacebookStrategy = require("passport-facebook").Strategy;

// Create an Express App
var app = express();
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client')));
//set up views
app.set('views', __dirname + '/client/views');
//set view engine
app.set('view engine', 'ejs');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Use session
app.use(session(sessionConfig))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
	done(null,user);
});
passport.deserializeUser(function(user, done){
	done(null, user);
});

//Load models
require('./server/config/mongoose.js')
//load fb-auth
require("./server/auth/fb_auth.js");

//Connect to routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})