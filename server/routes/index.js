// Modules
var express = require('express'); // brings in express in order to define the router
var router  = express.Router(); // defines and express route

// Routes
router.get('/', function(req, res){
  res.render('index'); // says to render the index.ejs file when a request is made to '/'
});

// Exports
module.exports = router;
