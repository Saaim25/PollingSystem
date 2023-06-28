const mongoose = require("mongoose");

const url = "mongodb+srv://Saaim:Tamboli%4025@pollingsys.7v602qg.mongodb.net/";

const db = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to the database....");
  } catch (err) {
    console.log("error while connecting to the database", err);
  }
};

module.exports = db;
