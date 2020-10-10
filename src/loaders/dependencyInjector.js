const Container = require("typedi").Container;
const LoggerInstance = require("./logger");

module.exports = ({ mongoConnection, models }) => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    });

    Container.set("logger", LoggerInstance);

    LoggerInstance.info('✌️ Agenda injected into container');

    return mongoConnection;

  }catch(e){
    LoggerInstance.error("🔥 Error on dependency injector loader: %o", e);
    throw e;
  }
}
