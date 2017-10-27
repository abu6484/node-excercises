// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var catSchema = new Schema({
  name: { type: String, required: true },
  age:{ type: Number, required: true },
  type: { type: String }
});

// the schema is useless so far
// we need to create a model using it
var Cat = mongoose.model('Cat', catSchema);

// make this available to our users in our Node applications
module.exports = Cat;