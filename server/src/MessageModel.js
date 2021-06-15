const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  sentence: String
});
module.exports = mongoose.model("message", MessageSchema);
