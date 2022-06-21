const mongoose = require("mongoose");
const googleSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  googleId: String,
});
module.exports = mongoose.model("Google", googleSchema);
