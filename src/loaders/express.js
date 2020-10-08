const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const routes = require("../api");

const App = ({ app }) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  })

  app.head("/status ")
}