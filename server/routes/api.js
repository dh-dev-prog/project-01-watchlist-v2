const express = require('express');
const router = express.Router();
const Movie = require('../models');

// Get all movies
router.get('/main', function(req, res, next){
  Movie.find({}).then((movies) => {
    console.log(movies);
    res.send(movies);
  });
});

// Add a movie
router.post('/main', function(req, res, next){
  Movie.create(req.body).then((movie) => {
    console.log(movie);
    res.send(movie);
  })
})
// Update one movie
router.put('/main/:id', function(req, res, next){
  Movie.findByIdAndUpdate({_id: req.params.id}, req.body).then((movie) => {
    Movie.findById({_id: req.params.id}).then((movie) => {
      console.log(movie);
      res.send(movie);
    })
  })
})

// Delete a movie from the db
router.delete('/main/:id', function(req, res, next){
  Movie.findByIdAndRemove({_id: req.params.id}).then((movie) => {
    console.log(movie);
    res.send(movie);
  })
})

module.exports = router;
