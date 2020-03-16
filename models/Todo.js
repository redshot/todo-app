const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Todo Schema
const TodoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('todo', TodoSchema);
