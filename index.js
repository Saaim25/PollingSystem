const express = require("express");
const bodyParser = require("body-parser");

const db = require("./config/db");
const port = 8000;

const app = express();

// Middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", require("./routes"));

// Connect to database
db();

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.log("Error while running the server", err);
  }

  console.log(`Server is listening on port ${port}`);
});
