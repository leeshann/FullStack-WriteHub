const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    password: "Nationalgeo123!",
    host: "localhost",
    port: 5432,
    database: "blogsitedb"
})


module.exports = pool