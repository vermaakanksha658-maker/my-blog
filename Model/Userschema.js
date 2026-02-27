const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true
  }
})
const User = mongoose.model('User', userschema)
module.exports = User;