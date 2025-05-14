const db = require("../db");

const getAllUsers = (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Database query error");
    }
    res.json(results);
  });
};

module.exports = {
  getAllUsers,
};
