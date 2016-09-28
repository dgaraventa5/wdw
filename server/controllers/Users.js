var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');
var Item = mongoose.model('Item');

module.exports = {
	login: function(req,res){
		User.findOne({fbid: req.body.uid}, function(err, user){
			if(!user){
				var user = {
					fbid: req.body.uid,
					name: req.body.displayName,
					image: req.body.photoURL
				}

				var new_user = new User(user)

				new_user.save(function(err, saved_user){
					if(err){
						res.sendStatus(500)
					}else{
						req.session.current_user = saved_user
						res.status(200).json(saved_user)
					}
				})
			}else{
				req.session.current_user = user
				res.json(user)
			}
		})
	},
	all: function(req,res){
		User.find({}, function(err,users){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(users)
			}
		})
	},
	current_user: function(req,res){
		res.json(req.session.current_user)
	},
	show: function(req,res){
		User.find({_id:req.params.id}, function(err, user){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(user)
			}
		})
	},
	upcoming: function(req,res){
		Event.find({_attendees:{$in:[req.session.current_user._id]}}).exec(function(err, user_events){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(user_events)
			}
		})
	},
	items: function(req,res){
		User.findOne({_id:req.session.current_user._id}).exec(function(err, user){
			if(err){
				res.sendStatus(500)
			}else{
				Item.find({_event: {$in:user._events}}).populate('_users').exec(function(err, all_items){
					if(err){
						res.sendStatus(500)
					}else{
						Item.find({_users: {$in:[user._id]}}).populate('_users').exec(function(err, user_items){
							if(err){
								res.sendStatus(500)
							}else{
								var obj = {
									user_items: user_items,
									all_items: all_items
								}
								res.json(obj)
							}
						})
					}
				})
			}
		})
	}
}