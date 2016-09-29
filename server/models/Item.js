var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ItemSchema = new mongoose.Schema({
	description: {type:String, required:true},
	completed: {type:Boolean, default:false},
	_event: {type:Schema.Types.ObjectId, ref:'Event'},
	_users: [{type:Schema.Types.ObjectId, ref:'User'}]
}, {timestamps:true})

mongoose.model('Item', ItemSchema);