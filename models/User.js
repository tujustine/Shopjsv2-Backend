const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  token: String,
  salt: String,
  hash: String,
  admin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
