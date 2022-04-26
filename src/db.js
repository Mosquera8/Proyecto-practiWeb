const {pool} = require('pg')

const pool = new pool({
    user: 'postgres',
    password: '--',
    host: 'localhost',
    port: '5432',
    database: '--'
})

module.exports = pool;