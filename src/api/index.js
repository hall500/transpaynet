const express = require("express");
const auth = require("./routes/auth");

const Routes = () => {
  const router = express.Router();
  auth(router);

  return app;
}

module.exports = Routes;