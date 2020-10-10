const mongoose = require("mongoose");
const config = require("../config");

const MONGO = async () => {
  await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  return db;
}

module.exports = MONGO;