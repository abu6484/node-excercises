var _ = require('lodash');
var Dog = require('../model/dogmodel.js');

module.exports = function (app) {

    _dogs=[];

    app.get("/", function (req, res) {
        res.send('Hi.. Hello World!!!')
    });

         
    app.get('/dog', function (req, res) {
        Dog.find({}, function(err, dogs) {
            if (err) throw err;
          
            // object of all the users
            res.json({ info: 'dogs found successfully', data: dogs });
          });
       
    });

    app.post('/dog', function (req, res) {
        
        var newdog = new Dog(req.body);
        newdog.save(function(err){
            if(err)
                res.json({ info: 'dog could not be added' });
            else
                res.json({ info: 'dog added successfully' });
        })
      
    });

    app.get('/dog/name/:name', function (req, res) {
        Dog.find({name: req.params.name}, function(err, dogs) {
            if (err) throw err;
          
            // object of all the users
            res.json({ info: 'dog found successfully', data: dogs });
          });
       
    });

    app.get('/dog/:id', function (req, res) {
        Dog.findById({_id: req.params.id}, function(err, dogs) {
            if (err) throw err;
          
            // object of all the users
            res.json({ info: 'dog found successfully', data: dogs });
          });
       
    });

    

    app.put('/dog/:name', function (req, res) {
        res.json({ info: 'dogs found successfully', data: _dogs });
    });

    app.delete('/dog/:id', function (req, res) {
        Dog.findById({_id: req.params.id}, function(err, dog) {
            if (err) throw err;
             
            dog.remove(function(err){
                if(err)
                    throw err;

            res.json({ info: 'dog deleted successfully' });

            });
           
          });
    });
}