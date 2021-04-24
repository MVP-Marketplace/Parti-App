const mongoose = require("mongoose");
const permissions = require("mongoose-permissions");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose"); 

const userSchema = new Schema({
  username: {
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
    // required: true, #Passport does not require this field 
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
  googleId: {
    type: String,
  }
}).plugin(permissions);

userSchema.plugin(passportLocalMongoose)
const User = mongoose.model("User", userSchema);

module.exports = User;
