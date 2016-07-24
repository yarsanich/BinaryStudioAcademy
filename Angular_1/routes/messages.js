module.exports = function(app){
	var messages;
	app.get('/messages', function (req, res) {
		res.json(messages);
	});

	app.post('/messages', function (req, res) {		
		var message = req.body;
		console.log(req.body);
		messages.push(message);
		res.json(message);
	});
}