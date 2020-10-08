const mongooseLoader = require("./mongoose");
const Logger = require("./logger");

const App = async ({ appLoader }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  const userModel = {
    name: "userModel",
    model: "model"
  };

}

module.exports = App;