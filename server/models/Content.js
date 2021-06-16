const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: { type: Object, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { minimize: false }
);

const Content = mongoose.model("Content", contentSchema);
module.exports = Content;
