var express = require('express');
var app = express(); 

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://nodeuser:login#123@ds233895.mlab.com:33895/nodesample');

var dogs = require('./route/dogs.js')(app);


var server = app.listen(3001, function () {
    console.log('Server running in port 3000');
});

