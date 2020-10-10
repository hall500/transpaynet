const express = require("express");
const router = express.Router();

const Buses = (app) => {
  app.use("/buses", router);

  router.get("/me", (req, res) => {
    return res.status(200).json({ user: "Tester" });
  });

  router.get("/new", (req, res) => {
    return res.status(200).json({
      newbus: "New bus data"
    });
  });
}

module.exports = Buses;