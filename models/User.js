const mongoose = require("mongoose");
const permissions = require("mongoose-permissions");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  role: {
    type: String,
    enum: ['Creator', 'Contributor', 'Recipient']
  },
  contactList: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
}).plugin(permissions);

const User = mongoose.model("User", userSchema);



module.exports = User;
