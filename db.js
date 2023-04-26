/** Database for lunchly */

const { Client } = require("pg");

let db = new Client({
    host: "/var/run/postgresql",
    database: "lunchly"
});
db.connect();

module.exports = db;
