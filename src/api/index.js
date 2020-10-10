const express = require("express");
const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname + "/routes");

const Routes = () => {
  const app = express();

  fs.readdir(dir, (err, files) => {
    if(err) throw err;
  
    files.forEach(file => {
      const file_path = dir + "/" + file;
      const file_data = require(file_path);
      if(isEmpty(file_data)){
        console.error(file + " is empty");
        return;
      }
      file_data(app);
    });
  });

  return app;
}

const isEmpty = (obj) => {
  for(var prop in obj){
    if(obj.hasOwnProperty(prop)){
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

module.exports = Routes;