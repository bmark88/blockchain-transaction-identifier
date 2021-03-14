const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "blockchaindb",
});

db.connect((err) => {
  if (err) {
    return console.log(`Error connecting to MySQL Database: ${err}`);
  }

  console.log("Connected to MySQL Database...");
});

module.exports = db;
