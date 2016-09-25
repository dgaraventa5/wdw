// Packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// App init
var app = express();
// DB Config
require('./server/config/mongoose.js');
// Middle-Ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'/client/static')));
// App routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Start App
app.listen(8000, function () {
  console.log("listening on Port 8000");
})