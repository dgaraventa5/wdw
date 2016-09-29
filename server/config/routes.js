var users = require('../controllers/Users.js');
var events = require('../controllers/Events.js');
var items = require('../controllers/Items.js');

module.exports = function(app){
	//Unprotected Routes
	app.post('/login', users.login)

	//MiddleWare
	app.use(function(req, res, next){
		if(req.session.current_user){
			next();
		}else{
			res.sendStatus(401)
		}
	})

	//Users Routes
	app.get('/users', users.all)
	app.get('/current_user', users.current_user)
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
	app.post('/item/assign_me/:id', items.assign_user)
	app.post('/item/remove_me/:id', items.remove_user)
	app.post('/item/update_users/:id', items.update_users)


}