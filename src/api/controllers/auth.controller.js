const Container = require("typedi").Container;

exports.login = (req, res) => {
  Container.get("userModel")
  res.status(200).send("Login URL");
};

exports.register = (req, res) => {
  Container.get("userModel").create({ 
    name: "John Doe", 
    email: "johndoe@gmail.com",
    password: "johndoe"
  }).then(doc => {
    console.log(doc);
  });
  res.status(200).send("Registration URL");
};