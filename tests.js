"use strict"

const dotenv = require("dotenv").config();
const helpers = require("./helpers");

if(dotenv.error){
  console.error(".env file is missing!");
  helpers.App.exit();
}

const express = require("express");
const app = express();

const cors = require("cors");
const runner = require("./test-runner");

const bodyparser = require("body-parser");

app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'pug');

app.get("/tests", (req, res) => {
  res.render(process.cwd() + '/views/pug/index');
});

var error;
app.get("/_api/get-tests", cors(), function(req, res, next){
  if(error || process.env.SKIP_TESTS) 
    return res.json({status: "unavailable"});
  next();
},
function(req, res, next){
  if(!runner.report) return next();
  res.json(testFilter(runner.report, req.query.type, req.query.n));
},
function(req, res){
  runner.on("done", function(report){
    process.nextTick(() =>  res.json(testFilter(runner.report, req.query.type, req.query.n)));
  });
});

const port = process.env.TEST_PORT || 3200;
app.listen(port, function() {
  console.log("Listening on port " + port);
  if(!process.env.SKIP_TESTS) {
    console.log("Running Tests...");
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
        error = e;
          console.log("Tests are not valid:");
          console.log(error);
      }
    }, 1500);
  }
});


module.exports = app; // for testing

function testFilter(tests, type, n) {
  var out;
  switch (type) {
    case "unit" :
      out = tests.filter(t => t.context.match("Unit Tests"));
      break;
    case "functional":
      out = tests.filter(t => t.context.match("Functional Tests") && !t.title.match("#example"));
      break;
    default:
      out = tests;
  }
  if(n !== undefined) {
    return out[n] || out;
  }
  return out;
}
