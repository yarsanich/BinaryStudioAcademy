var path = require('path'),
	bodyParser = require('body-parser'),
	express = require('express'),
	messages = [],
	app = express(),
	//viewRoutes = require('./routes/messages')(app);
	staticPath = path.normalize(__dirname + '/frontend'),
	server = app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(staticPath));

//when write routes on other file didnt work on my PC. 
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/messages', function (req, res) {
		res.json(messages);
	});

app.post('/messages', function (req, res) {		
	var message = req.body;
	console.log(req.body);
	messages.push(message);
	res.json(message);
});

module.exports = app;