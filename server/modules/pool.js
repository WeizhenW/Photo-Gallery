const pg = require('pg');
const Pool = pg.Pool;

const config = {
    database: 'photo-gallery',
    host: 'localhost',
    port: 5432
}

module.exports = new Pool(config);