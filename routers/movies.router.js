const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');


router.get('/', moviesController.getMovies);
router.get('/:movieId', moviesController.getMoviesByid);
router.post('/', moviesController.newMovie);
router.put('/:movieId', moviesController.UpdateMovie);
router.delete('/:movieId', moviesController.deleteMovie);

module.exports = router;