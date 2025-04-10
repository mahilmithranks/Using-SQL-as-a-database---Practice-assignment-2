
require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const app = express();


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


db.connect(err => {
  if (err) {
    console.error('❌ Failed to connect to MySQL:', err.message);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});


app.get('/', (req, res) => {
  res.send('Hello from Express with MySQL!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
