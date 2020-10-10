const mongooseLoader = require("./mongoose");
const Logger = require("./logger");
const dependencyInjectorLoader = require("./dependencyInjector.js");
const expressLoader = require("./express");

const Container = require("typedi").Container;

const App = async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();

  Logger.info("✌️ DB loaded and connected!");

  const userModel = {
    name: "userModel",
    model: require("../models/user")
  };

  const connection = await dependencyInjectorLoader({
    mongoConnection,
    models: [
      userModel
    ],
  });

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
  mongoConnection.close();
}

module.exports = App;