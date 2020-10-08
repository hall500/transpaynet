const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter full name"],
      index: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true
    },
    hash: String,
    salt: String,
    role: {
      type: String,
      default: "user"
    }
  },
  { timestamps: true } 
);

UserSchema.methods.setPassword = () => {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
};

UserSchema.methods.validatePassword = (password) => {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
  return this.hash === hash;
}

UserSchema.methods.generateJWT = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10)
  }, "secret");
}

UserSchema.methods.toAuthJSON = () => {
  return {
    id: this._id,
    email: this.email,
    token: this.generateJWT()
  }
}

module.exports = User = mongoose.model("User", UserSchema);