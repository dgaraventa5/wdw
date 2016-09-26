var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');
var Item = mongoose.model('Item');

module.exports = {
	show: function(req,res){
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
			_event: req.params.id,
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
	add_user: function(req,res){
		Item.find({_id:req.params.id}, function(err, item){
			if(err){
				res.sendStatus(500)
			}else{
				item.users.push(req.params.uid)
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
		Item.find({_id:req.params.id}, function(err, item){
			if(err){
				res.sendStatus(500)
			}else{
				for(var i=0 ; i<item.users.length ; i++){
					if(item.users[i] == req.params.uid){
						item.users.splice(i, 1)
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
	}
}