const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Todo = new Schema({
  description: {
    type: String
  },
  point: {
    type: Number
  },
  repeatable: {
    type: Boolean
  },
  date: {
    type: Date
  },
  owner: {
    type: String
  }
});

module.exports = mongoose.model('Todo', Todo);
