const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const ThirdPartyProviderSchema = new mongoose.Schema({
  provider_name: {
    type: String,
    default: null
  },
  provider_id: {
    type: String,
    default: null
  },
  provider_data: {
    type: {},
    default: null
  }
});

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
    email_is_verified: {
      type: Boolean,
      default: false
    },
    hash: {
      type: String
    },
    salt: {
      type: String
    },
    role: {
      type: String,
      default: "user"
    },
    third_party_auth: [ThirdPartyProviderSchema]
  },
  { timestamps: true } 
);

UserSchema.methods.setPassword = (password) => {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
};

UserSchema.methods.validatePassword = (password) => {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
  return this.hash === hash;
}

/* UserSchema.methods.generateJWT = () => {
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
} */

module.exports = mongoose.model("User", UserSchema);