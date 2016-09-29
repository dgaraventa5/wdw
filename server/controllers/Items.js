var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');
var Item = mongoose.model('Item');

module.exports = {
	show: function(req,res){
		Item.findOne({_id:req.params.id}).exec(function(err, item){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(item)
			}
		})
	},
	all: function(req,res){
		Item.find({_event:req.params.eid}).populate('_users').exec(function(err, items){
			if(err){
				res.sendStatus(500)
			}else{
				res.json(items)
			}
		})
	},
	new: function(req,res){
		var item = {
			description: req.body.description,
			_event: req.params.eid,
			_users: req.body.users
		}
		var new_item = new Item(item)

		new_item.save(function(err, saved_item){
			if(err){
				res.sendStatus(400)
			}else{
				res.json(saved_item)
			}
		})
	},
	edit: function(req,res){
		Item.find({_id:req.params.id}, function(err, item){
			if(err){
				res.sendStatus(500)
			}else{
				item.description = req.body.description
				item.save(function(err, saved_item){
					if(err){
						res.sendStatus(400)
					}else{
						res.json(saved_item)
					}
				})
			}
		})
	},
	update_users: function(req,res){
		Item.findOne({_id:req.params.id}, function(err, item){
			if(err){
				res.sendStatus(500)
			}else{
				item._users = req.body
				console.log(item)
				item.save(function(err, saved_item){
					if(err){
						res.sendStatus(500)
					}else{
						res.json(saved_item)
					}
				})
			}
		})
	},
	assign_user: function(req,res){
		Item.findOne({_id:req.params.id}, function(err, item){
			if(err){
				res.sendStatus(500)
			}else{
				item._users.push(req.session.current_user._id)
				item.save(function(err, saved_item){
					if(err){
						res.sendStatus(500)
					}else{
						res.json(saved_item)
					}
				})
			}
		})
	},
	remove_user: function(req,res){
		Item.findOne({_id:req.params.id}, function(err, item){
			if(err){
				res.sendStatus(500)
			}else{
				for(var i=0 ; i<item._users.length ; i++){
					if(item._users[i] == req.session.current_user._id){
						item._users.splice(i, 1)
					}
				}
				item.save(function(err, saved_item){
					if(err){
						res.sendStatus(500)
					}else{
						res.json(saved_item)
					}
				})
			}
		})
	},
	complete: function(req,res){
		Item.findOne({_id:req.params.id}, function(err, item){
			if(err){
				res.sendStatus(500)
			}else{
				item.completed = true
				item.save(function(err,saved_item){
					if(err){
						res.sendStatus(500)
					}else{
						res.json(saved_item)
					}
				})
			}
		})
	},
	uncomplete: function(req,res){
		Item.findOne({_id:req.params.id}, function(err, item){
			if(err){
				res.sendStatus(500)
			}else{
				item.completed = false
				item.save(function(err,saved_item){
					if(err){
						res.sendStatus(500)
					}else{
						res.json(saved_item)
					}
				})
			}
		})
	}
}