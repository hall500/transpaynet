"use strict";

/* To get started create a .env file containing
SESSION_SECRET="some random scret"
PORT=3000
DATABASE="mongo db url"
DBNAME="database name"
 */

/* DECLARE DOTENV */
const dotenv = require("dotenv").config();
const helpers = require("./helpers");

if(dotenv.error){
  console.log(".env file is missing!");
  helpers.App.exit();
}

/* DECLARE EXPRESS */
const express = require("express");
const app = express();

/* DECLARE BODY-PARSER */
const bodyparser = require("body-parser");

/* DECLARE CORS */
const cors = require("cors");

/* DECLARE HTTP SERVER */
const http = require("http").Server(app);

/* MIDDLEWARE */
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'pug');

/* CONNECTING MONGODB */
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.DATABASE;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const db = client.db(process.env.DBNAME || "test");
  // perform actions on the collection object
  client.close();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`running at port ${port}`);
});