const express = require("express");

const config = require("./config");

const Logger = require("./loaders/logger");

async function start() {
  const app = express();

  app.listen(config.port, (err) => {
    if(err){
      Logger.error(err);
    }
    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

start();