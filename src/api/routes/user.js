const express = require("express");
const app = express();
const router = express.Router();

const User = (app) => {
  app.use("/users", router);

  router.get("/me", (req, res) => {
    return res.json({ user: "Tester" }).status(200);
  });
}