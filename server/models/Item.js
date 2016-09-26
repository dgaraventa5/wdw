var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ItemSchema = new mongoose.Schema({
	description: {type:String, required:true},
	_event: {type:Schema.Types.ObjectId, ref:'Event'},
	_user: {type:Schema.Types.ObjectId, ref:'User'}
})

mongoose.model('Item', ItemSchema);