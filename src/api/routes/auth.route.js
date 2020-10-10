const router = require("express").Router();

module.exports = (app) => {
  const authController = require("../controllers/auth.controller.js");

  app.use("/auth", router);

  router.get("/", authController.login);

  router.get("/register", authController.register);
}

