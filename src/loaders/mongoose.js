const mongoose = require("mongoose");
const config = require("../config");

const MONGO = async () => {
  let db = null;
  try {
    client = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
    db = mongoose.connection;
    return db;
  } catch (err) {
    (db) && db.close();
    console.log('error: failed to connect to database');
    process.exit(1);
  }
}

module.exports = MONGO;