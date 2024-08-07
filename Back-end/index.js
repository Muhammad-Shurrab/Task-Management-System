const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// To import pool from db
const pool = require("./Database/DataConfig");

dotenv.config();
pool.module.exports;

const app = express();
const PORT = process.envPORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${port}`);
});
