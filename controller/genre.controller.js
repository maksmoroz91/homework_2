const db = require('../db');

class GenreController {
    async createGenre(req, res) {
        const {title} = req.body;
        const newGenre = await db.query(
            'INSERT INTO genre (title) VALUES ($1) RETURNING *',
            [title]
        );
        res.json(newGenre.rows[0]);
    }

    async getGenres(req, res) {
        const genres = await db.query('SELECT * FROM genre');
        res.json(genres.rows);
    }

    async getOneGenre(req, res) {
        const genre_id = req.params.id;
        const genre = await db.query(
            'SELECT * FROM genre WHERE genre_id = $1',
            [genre_id]
        );
        res.json(genre.rows[0]);
    }

    async updateGenre(req, res) {
        const {genre_id, title} = req.body;
        const genre = await db.query(
            'UPDATE genre SET title = $1 WHERE genre_id = $2 RETURNING *',
            [title, genre_id]
        );
        res.json(genre.rows[0])
    }

    async deleteGenre(req, res) {
        const genre_id = req.params.id;
        const genre = await db.query(
            'DELETE FROM genre WHERE genre_id = $1',
            [genre_id]
        );
        res.json(genre.rows[0]);
    }
}

module.exports = new GenreController();