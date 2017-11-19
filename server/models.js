const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  season: String,
  img: String,
  date: Date,
  rate: Number,
  wished: {
    type: Boolean,
    default: false
  },
  watched: {
    type: Boolean,
    default: false
  }
});

const Movie = mongoose.model('movies', MovieSchema);

module.exports = Movie;
