const Router = require('express');
const router = new Router();
const filmGenreController = require('../controller/filmGenre.controller');

router.post('/genreByFilm', filmGenreController.createGenreByFilm);
router.get('/genresByFilm/:id', filmGenreController.getGenresByFilm);
router.put('/genreByFilm', filmGenreController.updateGenreByFilm);
router.delete('/genreByFilm', filmGenreController.deleteGenreByFilm);

module.exports = router;