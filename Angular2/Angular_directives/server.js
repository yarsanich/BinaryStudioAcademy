var express = require('express'),
    path = require('path'),
    app = express(),
    staticPath = path.normalize(__dirname + '/frontend'),
    server = app.listen(5050);

app.use(express.static(staticPath));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

module.exports = app;