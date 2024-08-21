const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Set up PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// connection testiNG
pool.connect((err, client, done) => {
  if (err) throw err;
  console.log("Connected to PostgreSQL database");
  done();
});

// API endpoint to suBmit poll results
app.post("/api/submit-poll", async (req, res) => {
  const { userName, answers } = req.body;

  try {
    const query = `
      INSERT INTO poll_results (user_name, answers) 
      VALUES ($1, $2) 
      RETURNING id
    `;
    const values = [userName, JSON.stringify(answers)];
    const result = await pool.query(query, values);
    res
      .status(200)
      .json({ message: "Poll submitted successfully!", id: result.rows[0].id });
  } catch (error) {
    console.error("Error saving poll results:", error);
    res.status(500).json({ error: "Failed to submit poll" });
  }
});

// StarTinG the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
