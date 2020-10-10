const express = require("express");
const router = express.Router();

const User = (app) => {
  const userController = require("../controllers/user.controller.js");

  app.use("/users", router);

  router.get("/", userController.getAllUsers);

  router.get("/newuser", (req, res) => {
    return res.status(200).json({
      newuser: "New user data"
    });
  });
}

module.exports = User;