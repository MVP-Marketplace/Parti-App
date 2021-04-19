const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: password,
    required: true,
    minLength: 6 
  },
  // role: {
  //   type: String,
  //   enum: ['Creator', 'Contributor', 'Recipient']
  // },
  contactList: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

const User = mongoose.model('User', userSchema)
module.exports = User