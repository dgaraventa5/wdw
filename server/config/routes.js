var users = require('../controllers/Users.js');
module.exports = function(app){
  app.get('/users', users.show)
  // loads the page that adds a user
  app.get('/users/new', users.create)
  // puts a user in the db
  app.post('/users', users.post)
  // shows a user by id
  app.get('/users/:id', users.showOne )
  // loads a user and page for editing
  app.get('/users/:id/edit', users.edit)
  // edits a user
  app.post('/users/:id', users.put)
  //deletes a user
  app.post('/users/:id/destroy', users.destroy)
}