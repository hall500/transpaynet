const passport = require("passport");
const LocalStrategy = require("passport-local");

const session = require("express-session");

module.exports = (app) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
      db.collection('chatusers').findOne(
          {id: id},
          (err, doc) => {
              done(null, doc);
          }
      );
  });

  passport.use(new LocalStrategy({ usernameField: 'user[email]', passwordField: 'user[password]'}, (email, password, done) => {
    
  }));
}

