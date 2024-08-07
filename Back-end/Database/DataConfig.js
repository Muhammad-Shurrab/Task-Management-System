const { Connection } = require("pg");

const { pool } = require;

dotenv.config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "TaskMangementSystem",
  port: 5432,
});

// to use it in index.js
module.exports = pool;
