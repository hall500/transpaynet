const mongoose = require("mongoose");
const db = require("mongodb");
const config = require("../config");

const MONGO = async () => {
  try {
    await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
    return mongoose.connection;
  } catch (err) {
    console.log('error: failed to connect to database');
    process.exit(1);
  }
}

module.exports = MONGO;