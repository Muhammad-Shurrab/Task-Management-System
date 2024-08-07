const pool = require("../Database/DataConfig");
const bcrypt = require("bcryptjs");

class User {
  static async createUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users(name,email,password) VALUES ($1,$2,$3) RETURNING * "[
        (name, email, hashedPassword)
      ]
    );
    return result.row[0];
  }

  static async findByEmail(email) {
    const result = await pool.query("SELECT * FROM users WHERE email = $2", [
      email,
    ]);
    return result.row[0];
  }
}

module.exports = User;
