const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/* DATABASE */
const db = new sqlite3.Database("./finance.db", (err) => {
  if (err) console.log(err);
  else console.log("SQLite Connected");
});

/* CREATE TABLE */
db.run(`
  CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    amount REAL,
    type TEXT,
    description TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

/* ADD TRANSACTION */
app.post("/add", (req, res) => {
  const { amount, type, description } = req.body;

  const query = `
    INSERT INTO transactions (amount, type, description)
    VALUES (?, ?, ?)
  `;

  db.run(query, [amount, type, description], function (err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({ message: "Transaction added", id: this.lastID });
    }
  });
});

/* GET ALL TRANSACTIONS */
app.get("/transactions", (req, res) => {
  db.all("SELECT * FROM transactions", [], (err, rows) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(rows);
    }
  });
});

/* DELETE TRANSACTION */
app.delete("/delete/:id", (req, res) => {
  db.run("DELETE FROM transactions WHERE id = ?", [req.params.id], function (err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({ message: "Deleted successfully" });
    }
  });
});

/* START SERVER */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});