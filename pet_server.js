var express = require('express');
var app = express(); 

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var dogs = require('./route/pets.js')(app);


var server = app.listen(3002, function () {
    console.log('Server running in port 3000');
});

