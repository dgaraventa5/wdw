var users = require('../controllers/Users.js');
var events = require('../controllers/Events.js');
var items = require('../controllers/Items.js');

module.exports = function(app){
	//Unprotected Routes
	app.post('/login', users.login)

	//Users Routes
	app.get('/users', users.all)
	app.get('/user/upcoming', users.upcoming)
	app.get('/user/items', users.items)
	app.get('/user/:id', users.show)

	//Events Routes
	app.get('/events', events.all)
	app.get('/event/:id', events.show)
	app.get('/event/attendees/:id', events.attendees)
	app.post('/event', events.new)
	app.post('/event/:id', events.edit)
	app.post('/event/attendees/:id', events.update_attendees)
	app.post('/event/admins/:id', events.add_admins)
	app.post('/event/delete/:id', events.delete)

	//Items Routes
	app.get('/item/:id', items.show)
	app.get('/items/:eid', items.all)
	app.post('/item/:eid', items.new)
	app.post('/item/edit/:id', items.edit)
	app.post('/item/update_users/:id', items.update_users)
	app.post('/item/remove_user/:id/:uid', items.remove_user)


}