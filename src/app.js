const express = require("express");

/* To get started create a .env file containing
SESSION_SECRET="some random scret"
PORT=3000
DATABASE="mongo db url"
DBNAME="database name"
 */
const config = require("./config");

const Logger = require("./loaders/logger");

async function start() {
  const app = express();

  await require("./loaders")({ appLoader: app });

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