var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EventSchema = new mongoose.Schema({
	name: {type:String, required:true, minLength:3},
	description: {type:String},
	location: {type:String},
	date: {type:Date},
	time: {type:String},
	image: {type:String},
	_host: {type:Schema.Types.ObjectId, ref:'User'},
	_admins: [{type:Schema.Types.ObjectId, ref:'User'}],
	_attendees:[{type:Schema.Types.ObjectId, ref:'User'}],
	_items:[{type:Schema.Types.ObjectId, ref:'Item'}]
})

mongoose.model('Event', EventSchema);