var users = require('../controllers/Users.js');
var events = require('../controllers/Events.js');
var items = require('../controllers/Items.js');

module.exports = function(app){
	//Users Routes
	app.get('/users', users.all)
	app.get('/user/:id', users.show)
	app.post('/user', users.new)

	//Events Routes
	app.get('/events', events.all)
	app.get('/event/:id', event.show)
	app.post('/event', event.new)
	app.post('/event/:id', event.edit)
	app.post('/event/admin/:uid', event.new_admin)

	//Items Routes


}