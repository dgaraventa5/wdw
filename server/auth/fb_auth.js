var mongoose = require("mongoose");
var User = mongoose.model("User");
var passport = require("passport");
var FacebookStrategy = require("passport-facebook").Strategy;

passport.use(new FacebookStrategy({
			clientID: "1655368091421394",
			clientSecret: "8c1e07f799ee71ae118b0ec8edbd2490",
			callbackURL: "http://whosdoingwhat.co/auth/facebook/callback"
	},
	function(accessToken, refreshToken, profile, done){
		console.log("searching for user");
		User.findOne({fbid: profile.id}, function(err, user){
			if (err) {
				console.log(err);
				return done(err);
			}
			if (!user) {
				console.log("new user")
				var user = {
					fbid: profile.uid,
					name: profile.displayName,
					image: profile.photoURL
				}
				var new_user = new User(user);
				new_user.save(function(err, saved_user){
					console.log("inside save")
					if (err) {
						console.log(err);
						return done(err, user);
					}else{
						req.session.current_user = saved_user
						return done(err, user);	
					}
				});
			}else{
				console.log("inside existing user")
				// req.session.current_user = user;
				return done(err, user);
			}
		});
	}
))