var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    workers = require('./workers'),
    app = express(),
    staticPath = path.normalize(__dirname + './frontend'),
    router = express.Router(),
    jsonfile = require('jsonfile');

var file = './workers.json'
jsonfile.readFile(file, function(err, obj) {
    //console.dir(obj)
})

server = app.listen(3000);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(staticPath));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname));
app.use('/', router);

router.get('/workers.json', function(req, res) {
    res.json(workers);
});

router.delete('/workers/:id', function(req, res) {
    console.log('Remove ' + req.params.id);
    workers.splice(req.params.id, 1);
    jsonfile.writeFile(file, workers, function(err) {
        console.log("No errors when delete");
    })
});

router.put('/workers/:id', function(req, res) {
    var id = req.params.id;
    var worker = req.body;
    console.log(req.body);
    for (var i = 0; i < workers.length; i++) {
        if (workers[i]._id === id) {
            workers[i].firstName = worker.firstName;
            workers[i].secondName = worker.secondName;
            workers[i].email = worker.email;
        }
    }
    jsonfile.writeFile(file, workers, function(err) {
        console.log("No error when update!");
    })
});


module.exports = app;