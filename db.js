require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.USER_PG || 'postgres',
    password: process.env.PASSWORD_PG || 'root',
    host: 'localhost',
    port: 5432,
    database: 'film_db',
});


module.exports = pool;