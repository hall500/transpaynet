const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if(process.env.NODE_ENV === "development"){
  const containsEnv = dotenv.config();

  if(containsEnv.error){
    console.error("⚠️  Couldn't find .env file  ⚠️");
    process.exit(1);
  }
}

module.exports = CONFIG = {
  port: parseInt(process.env.PORT || 3000, 10),
  databaseURL: process.env.MONGODB_URI,
  database: process.env.DATABASE,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
}