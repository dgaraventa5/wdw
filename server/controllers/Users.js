var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  show: function (req, res) {
	    User.find({}, function(err, users){
	      if(err){
	        console.log('Errors with find all users: ' + err);
	      }
	      else{
	        console.log(users);
	        res.json(users);
	      }
	    })
  },
  create: function (req, res){
    res.render('adduser')
  },
  post: function(req, res) {
    console.log(req.body);
    var newuser = new User(req.body);
    newuser.save(function(err) {
      if(err){
        console.log("something went wrong with db " + err);
      }
      else{
        console.log("successfully added a user!");
        res.redirect('/');
      }
    });
  },
  showOne: function(req, res){
    id = req.params.id;
    User.findOne({_id: id}, function(err, user){
      if(err){
        console.log('Errors with find all users: ' + err);
      }
      else{
        console.log('got a user');
        res.json(user);
      }
    })
  },
  edit:function(req, res){
    id = req.params.id;
    User.findOne({_id: id}, function(err, user){
      if(err){
        console.log('Errors with find all users: ' + err);
      }
      else{
        console.log('loaded a user for editing');
        res.render("edituser", {'user':user});
      }
    })
  },
  put:function(req, res) {
    id = req.params.id;
    var userToEdit = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      favorite_language: req.body.favorite_language
    }
    User.update({_id: id}, userToEdit, function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("success");
        res.redirect('/users/'+id+'/edit')
      }
    })
  },
  destroy:function (req, res) {
    id = req.params.id;
    User.remove({_id: id}, function (err) {
      if(err){
        console.log(err);
      }
      else {
        console.log("successfully deleted a USER");
        res.redirect('/');
      }
    })
  }
}