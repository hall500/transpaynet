const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const ObjectID    = require("mongodb").ObjectID;
const User = require("../models/user.js");

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) =>{
  User.findById({ _id: new ObjectID(id) }, (err, user) => {
    done(err, user);
  })
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email })
    .then(user => {
      console.log("User " + email + " attempted to login.");
      if(!user) {
        //const newUser = new User({ email, password });
        console.log("user created");
      }else{

      }
    })
  })
);
