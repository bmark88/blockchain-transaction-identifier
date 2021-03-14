require("dotenv").config();
// require("./models/index.js");

const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Blockchain Transaction Identifier");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
