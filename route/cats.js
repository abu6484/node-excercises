var _ = require('lodash');
var Cat = require('../model/catmodel.js');

module.exports = function (app) {

    _cats=[];

    app.get("/", function (req, res) {
        res.send('Hi.. Hello World!!!')
    });

         
    app.get('/cat', function (req, res) {
        Cat.find({}, function(err, cats) {
            if (err) throw err;
          
            // object of all the users
            res.json({ info: 'cats found successfully', data: cats });
          });
       
    });

    app.post('/cat', function (req, res) {
        
        var newcat = new Cat(req.body);
        newcat.save(function(err){
            if(err)
                res.json({ info: 'Cat could not be added' });
            else
                res.json({ info: 'cats added successfully' });
        })
      
    });

    app.get('/cat/name/:name', function (req, res) {
        Cat.find({name: req.params.name}, function(err, cats) {
            if (err) throw err;
          
            // object of all the users
            res.json({ info: 'cat found successfully', data: cats });
          });
       
    });

    app.get('/cat/:id', function (req, res) {
        Cat.findById({_id: req.params.id}, function(err, cats) {
            if (err) throw err;
          
            // object of all the users
            res.json({ info: 'cat found successfully', data: cats });
          });
       
    });

    

    app.put('/cat/:name', function (req, res) {
        res.json({ info: 'cats found successfully', data: _cats });
    });

    app.delete('/cat/:id', function (req, res) {
        Cat.findById({_id: req.params.id}, function(err, cat) {
            if (err) throw err;
             
            cat.remove(function(err){
                if(err)
                    throw err;

            res.json({ info: 'cat deleted successfully' });

            });
           
          });
    });
}