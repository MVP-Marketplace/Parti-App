const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema(
  {
    name: { type: String },
    content: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    greetingCardId: { type: Schema.Types.ObjectId, ref: "GreetingCard" },
  }
);

const Content = mongoose.model("Content", contentSchema);
module.exports = Content;