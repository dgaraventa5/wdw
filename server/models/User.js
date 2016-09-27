var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
	facebook_token: {type:String},
	first_name: {type:String},
	last_name: {type:String},
	_admins: [{type:Schema.Types.ObjectId, ref:'Event'}],
	_events: [{type:Schema.Types.ObjectId, ref:'Event'}],
	_items: [{type:Schema.Types.ObjectId, ref:'Item'}]
}, {timestamps:true});

mongoose.model('User', UserSchema);