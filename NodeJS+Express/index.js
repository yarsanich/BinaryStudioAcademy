var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();
var server = app.listen(1433);

var staticDir = __dirname + '/public/';
var staticPath = path.normalize(__dirname + '/public');
app.use(express.static(staticPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var messages = [];

app.get('/', function (req, res) {
	res.sendfile(staticDir + 'index.html');
});

app.get('/messages', function (req, res) {
	res.json(messages);
});

app.post('/messages', function (req, res) {
	var message = req.body;
	messages.push(message);
	res.json(message);
});

mongoose.connect("mongodb://localhost/ajaxChat");
var ChatSchema = mongoose.Schema({
	created: Date,
	content: String,
	username: String,
});

var Chat = mongoose.model('Chat',ChatSchema);


app.get('/messages', function(req, res) {
  Chat.find({}).exec(function(err, msgs) {
    res.json(msgs);
  });
});