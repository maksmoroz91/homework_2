const db = require('../db');

class FilmController {
    async createFilm(req, res) {
        const {title, year_of_production} = req.body;
        const newFilm = await db.query(
            'INSERT INTO film (title, year_of_production) VALUES ($1, $2) RETURNING *',
            [title, year_of_production]
        );
        res.json(newFilm.rows[0]);
    }

    async getFilms(req, res) {
        const films = await db.query('SELECT * FROM film');
        res.json(films.rows);
    }

    async getOneFilm(req, res) {
        const film_id = req.params.id;
        const film = await db.query(
            'SELECT * FROM film WHERE film_id = $1',
            [film_id]
        );
        res.json(film.rows[0]);
    }

    async updateFilm(req, res) {
        const {film_id, title, year_of_production} = req.body;
        const film = await db.query(
            'UPDATE film SET title = $1, year_of_production = $2 WHERE film_id = $3 RETURNING *',
            [title, year_of_production, film_id]
        );
        res.json(film.rows[0])
    }

    async deleteFilm(req, res) {
        const film_id = req.params.id;
        const film = await db.query(
            'DELETE FROM film WHERE film_id = $1',
            [film_id]
        );
        res.json(film.rows[0]);
    }
}

module.exports = new FilmController();