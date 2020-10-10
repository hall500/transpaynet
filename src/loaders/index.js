const mongooseLoader = require("./mongoose");
const Logger = require("./logger");
const expressLoader = require("./express");

const App = async ({ expressApp }) => {
  //const mongoConnection = await mongooseLoader();
  //Logger.info("✌️ DB loaded and connected!");

  /* const userModel = {
    name: "userModel",
    model: require("../models/user")
  }; */


  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
}

module.exports = App;