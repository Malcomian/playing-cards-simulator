const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  visibility: {
    type: Boolean,
    default: true
  },
  user_id: {
    type: String
  },
  user_name: {
    type: String
  },
  state: {
    type: Object
  }
}, { timestamps: true });

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
