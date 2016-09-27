var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
	fbid: {type:String, required:true},
	name: {type:String},
	image: {type:String},
	_admins: [{type:Schema.Types.ObjectId, ref:'Event'}],
	_events: [{type:Schema.Types.ObjectId, ref:'Event'}],
	_items: [{type:Schema.Types.ObjectId, ref:'Item'}]
}, {timestamps:true});

mongoose.model('User', UserSchema);