const Container = require("typedi");
const LoggerInstance = require("./logger");

module.exports = ({ dbConnection, models }) => {
  try {
    
  }catch(e){
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
}
