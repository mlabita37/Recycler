var express     = require('express'); // express framework
var morgan      = require('morgan'); // morgan request logging
var bodyParser  = require('body-parser'); // parses requests into whatever format you want
var mongoose    = require('mongoose'); // provides mongoDB with object mapping abilities

var app = express(); // tells this application to use the loaded express framework
app.use(express.static('./client/public')); // this says to use express to route us to the public folder

app.use( bodyParser.urlencoded( {extended: true}) ); // this says to use bodyParser to send requests in urlencoded format?????

var mongoPath = 'mongodb://localhost/recycler-01'; // this defines that DB name and path
mongoose.connect(mongoPath); // tells mongoose where the mongoDB lives

app.set('views', __dirname + '/client/views'); // ???? no idea what this does
app.set('view engine', 'ejs');

var indexRouter = require('./server/routes/index'); // defines where our index file lives

//Routers
app.use('/', indexRouter); // this says that when a person goes to '/', route them to the index

//Listening
var port = 8080; // defines our local port
app.listen(port, function(){
  console.log("...listening on port" + port); // tells the app to listen for changes???/requests???? on port 8080
});
