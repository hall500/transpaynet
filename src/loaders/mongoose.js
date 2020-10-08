const mongoose = require("mongoose");
const db = require("mongodb");
const config = require("../config");

const MONGO = async () => {
  const connection = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
  return connection.connection.db;
}

module.exports = MONGO;