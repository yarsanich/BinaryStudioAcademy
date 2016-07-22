var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect("mongodb://localhost/socketChar");

var ChatSchema = mongoose.Schema({
  created: Date,
  content: String,
  username: String,
});

// create a model from the chat schema
var Chat = mongoose.model('Chat', ChatSchema);

app.get('/', function(req,res){
	res.sendFile(__dirname+'/public/index(socket).html');
});


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
    console.log(newMsg.username,newMsg.content,newMsg.created);
    //Save it to database
    newMsg.save(function(err, data){
      io.emit('chat message', newMsg);
    });
  	});
});

http.listen(2000,function(){
	console.log('listening on *:2000');
});
