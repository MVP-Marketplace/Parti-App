const mongoose = require('mongoose')
const Schema = mongoose.Schema

const greetingCardSchema = new Schema({

  userId: {
    type: String,
    required: true,
    ref: "User",
  },
  recipientEmail: {
    type: String,
    required: true
  }, 
  recipientFirstName: {
    type: String,
    required: true
  }, 
  recipientLastName: {
    type: String,
    required: true
  }, 
  dueDate: {
    type: String,
  },
  dueTime: [{
    hours: {
        type: Number, required: true, min: 0, max: 23
    },
    minutes: {
        type: Number, required: true, min: 0, max: 59
    }
  }],
  // dueTimeZone: {
  //   type: String,
  //   enum: ['Eastern Standart Time', 'Central Standart Time', 'Mountain Standart Time', 'Pacific Standart Time']
  // },
  content: [{
    type: Schema.Types.ObjectId,
    ref: 'Content'
  }],
  status: {
    type: String,
    enum: ['Incomplete', 'Completed', 'Sent'],
    default: "Incomplete",
  },
  occasion: {
    type: String,
    enum: ['Anniversary', 'Baby', 'Birthday', 'Graduation', 'Promotion',  'Wedding']
  },
  title: {
    type: String
  }
}, 
{ timestamps: true })

const GreetingCard = mongoose.model('GreetingCard', greetingCardSchema)
module.exports = GreetingCard

// dueTime: {
  //   timestamps: true,
  //   required: true
  // },