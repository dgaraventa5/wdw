var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

// Connect to mongodb
mongoose.connect('mongodb://localhost/filestructure');

// Gets the path for your models
var models_path = path.join(__dirname, './../models');
// Executing every model file 
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(path.join(models_path, file));
  }
});