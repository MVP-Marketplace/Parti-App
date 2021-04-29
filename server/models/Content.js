const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contentSchema = new Schema({
  message: { type: String, maxLength: 250 },
  content: String,
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
})

const Content = mongoose.model('Content', contentSchema)
module.exports = Content