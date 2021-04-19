const mongoose = require('mongoose')
const Schema = mongoose.Schema

const greetingCardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dueDate: {
    type: Date(),
    required: true
  },
  content: [{
    type: Schema.Types.ObjectId,
    ref: 'Content'
  }],
  status: {
    type: String,
    enum: ['Incomplete', 'Completed', 'Sent']
  },
  template: {
    type: String,
    enum: ['Birthday', 'Wedding', 'Graduation']
  },
  header: {
    type: String,
    required: true
  }
}, 
{ timestamps: true })

const GreetingCard = mongoose.model('GreetingCard', greetingCardSchema)
module.exports = GreetingCard