var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');
var Item = mongoose.model('Item');

module.exports = {
	all: function(req,res){
		User.find({}, function(err,users){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(users)
			}
		})
	},
	show: function(req,res){
		User.find({_id:req.params.id}, function(err, user){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(user)
			}
		})
	}
	upcoming: function(req,res){
		User.find({_id: req.session.current_user._id}).populate('_events').populate('_items').exec(function(err, user){
			if(err){
				res.sendStatus(500)
			}else{
				User.populate('user', {path:'_items._users', model:'User'}).exec(function(err, full_user){
					if(err){
						res.sendStatus(500)
					}else{
						res.json(full_user)
					}
				})
			}
		})
	},
	new: function(req,res){
		var user = {
			facebook_token: req.body.facebook_token,
			name: req.body.name
		}
		var new_user = new User(user)

		new_user.save(function(err, saved_user){
			if(err){
				res.sendStatus(400)
			}else{
				res.json(saved_user)
			}
		})
	}
}