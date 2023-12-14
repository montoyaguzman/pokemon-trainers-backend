const { Pool } = require('pg');
const { config } = require('../config/');

const {
    dbHost,
    dbUser,
    dbPass,
    dbPort,
    dbName,
} = config;

const pool = new Pool({
    user: dbUser,
    password: dbPass,
    host: dbHost,
    port: dbPort,
    database: dbName,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    close: () => pool.end()
};