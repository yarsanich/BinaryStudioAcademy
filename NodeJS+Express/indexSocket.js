var express = require('express');
var path = require('path');
var app = express();
var socketio = require('socket.io')
var Chat = require('./DB/db').Chat

var server = app.listen(1444);
var io = socketio.listen(server);
var staticDir = __dirname + '/public(socket)/';
var staticPath = path.normalize(__dirname + '/public(socket)/');
app.use(express.static(staticPath));

//ROUTE
app.get('/', function(req,res){
	res.sendFile(staticDir + 'index.html');
});

//SOCKETS
io.on('connection', function(socket){
	console.log('Client connected');

	socket.on('disconnected', function() {
		console.log('Client disconnected');
	});

	socket.on('chat message', function(data) {
	console.log('message: ' + data.name)
    //Create message
    var newMsg = new Chat({
      username: data.name,
      content: data.content,
      created: new Date()
    });
    //Save it to database
    newMsg.save(function(err, data){
      io.emit('chat message', newMsg);
    });
  	});
});

