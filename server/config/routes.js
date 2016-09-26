var users = require('../controllers/Users.js');
var events = require('../controllers/Events.js');
var items = require('../controllers/Items.js');

module.exports = function(app){
	//Users Routes
	app.get('/users', users.all)
	app.get('/user/upcoming', users.upcoming)
	app.get('/user/:id', users.show)
	app.post('/user', users.new)

	//Events Routes
	app.get('/events', events.all)
	app.get('/event/:id', events.show)
	app.post('/event', events.new)
	app.post('/event/:id', events.edit)
	app.post('/event/attendees/:id', events.add_attendees)
	app.post('/event/admins/:id', events.add_admins)
	app.post('/event/delete/:id', events.delete)

	//Items Routes
	app.get('/items/:eid', items.show)
	app.post('/item/:eid', items.new)
	app.post('/item/edit/:id', items.edit)
	app.post('/item/add_user/:id/:uid', items.add_user)
	app.post('/item/remove_user/:id/:uid', items.remove_user)


}