const db = require('../db');

class filmGenreController {
    async createGenreByFilm(req, res) {
        const {film_id, genre_id} = req.body;
        const newGenreByFilm = await db.query(
            'INSERT INTO film_genre (film_id, genre_id) VALUES ($1, $2) RETURNING *',
            [film_id, genre_id]
        );
        res.json(newGenreByFilm.rows[0]);
    }

    async getGenresByFilm(req, res) {
        const film_id = req.params.id;
        const genresByFilm = await db.query(
            'SELECT genre.title FROM genre JOIN film_genre ON genre.genre_id = film_genre.genre_id WHERE film_genre.film_id = $1',
            [film_id]
            );
        res.json(genresByFilm.rows);
    }


    async updateGenreByFilm(req, res) {
        const {newGenre_id, film_id, genre_id} = req.body;
        const genreByFilm = await db.query(
            'UPDATE film_genre SET genre_id = $1 WHERE film_id = $2 AND genre_id = $3 RETURNING *',
            [newGenre_id, film_id, genre_id]
        );
        res.json(genreByFilm.rows[0])
    }

    async deleteGenreByFilm(req, res) {
        const {film_id, genre_id} = req.body;
        const genreByFilm = await db.query(
            'DELETE FROM film_genre WHERE film_id = $1 AND genre_id = $2',
            [film_id, genre_id]
        );
        res.json(genreByFilm.rows[0]);
    }
}

module.exports = new filmGenreController();