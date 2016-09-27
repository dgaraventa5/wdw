var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');
var Item = mongoose.model('Item');

module.exports = {
	all: function(req,res){
		Event.find({public:true}).populate('_host').exec(function(err, events){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(events)
			}
		})
	},
	show: function(req,res){
		Event.find({_id:req.params.id}).populate('_host').populate('_admins').populate('_attendees').exec(function(err, event){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(event)
			}
		})
	},
	attendees: function(req,res){
		Event.find({_id:req.params.id}).populate('_attendees').exec(function(err, event){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(event._attendees)
			}
		})
	}
	new: function(req,res){
		var event = {
			name: req.body.name,
			description: req.body.description,
			location: req.body.location,
			date: req.body.date,
			time: req.body.time,
			image: req.body.image,
			_host: req.session.current_user._id,
			_admins: [req.session.current_user._id],
			_attendees: [req.session.current_user._id]
		}
		if(req.body.admins){
			event._admins.concat(req.body.admins)
			event._attendees.concat(req.body.admins)
		}
		if(req.body._attendees){
			event._attendees.concat(req.body.attendees)
		}

		var new_event = new Event(event)

		new_event.save(function(err, saved_event){
			if(err){
				res.sendStatus(400)
			}else{
				res.json(saved_event)
			}
		})
	},
	add_attendees: function(req,res){
		Event.find({_id:req.params.id}, function(err,event){
			if(err){
				res.sendStatus(500)
			}else{
				event._attendees.concat(req.body.attendees)
				event.save(function(err, saved_event){
					if(err){
						res.sendStatus(500)
					}else{
						res.json(saved_event)
					}
				})
			}
		})
	},
	add_admins: function(req,res){
		Event.find({_id:req.params.id}, function(err,event){
			if(err){
				res.sendStatus(500)
			}else{
				event._admins.concat(req.body.admins)
				event.save(function(err, saved_event){
					if(err){
						res.sendStatus(500)
					}else{
						res.json(saved_event)
					}
				})
			}
		})
	},
	edit: function(req,res){
		Event.find({_id:req.params.id}, function(err,event){
			if(err){
				res.sendStatus(500)
			}else{
				event.name = req.body.name
				event.description = req.body.description
				event.location = req.body.location
				event.date = req.body.date
				event.time = req.body.time

				event.save(function(err, saved_event){
					if(err){
						res.sendStatus(400)
					}else{
						res.json(saved_event)
					}
				})
			}
		})
	},
	delete: function(req,res){
		Event.remove({_id:req.params.id}, function(err){
			if(err){
				res.sendStatus(500)
			}else{
				res.sendStatus(200)
			}
		})
	}
}