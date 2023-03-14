const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'maks',
    password: '123456',
    host: 'localhost',
    port: 5432,
});


module.exports = pool;