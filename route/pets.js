var _ = require('lodash');
var r = require('request');
var async = require('async');

module.exports = function (app) {

    _dogs=[];

    app.get("/", function (req, res) {
        res.send('Hi.. Hello Pets World!!!')
    });
        
    app.get('/pets', function (req, res) {
        
                async.parallel({
                    cat: function(callback){
                        r({uri: 'http://localhost:3000/cat'}, function(error, response, body) {
                            if (error) {
                                callback({service: 'cat', error: error});
                                return;
                            };
                            if (!error && response.statusCode === 200) {
                                console.log(body.data);
                                callback(null, body);
                            } else {
                                callback(response.statusCode);
                            }
                        });
                    },
                    dog: function(callback){
                        r({uri: 'http://localhost:3001/dog'}, function(error, response, body) {
                            if (error) {
                                callback({service: 'dog', error: error});
                                return;
                            };
                            if (!error && response.statusCode === 200) {
                                console.log(body.data);
                                callback(null, body);
                            } else {
                                callback(response.statusCode);
                            }
                        });
                    }
                },
                function(error, results) {
                    res.json({
                        error: error,
                        results: results
                    });
                });
        
            });  
       
  
    
}