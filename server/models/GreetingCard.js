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
  contentList: [
		{
			type: mongoose.Schema.Types.Object,
			ref: "Content",
		}
  ],
  status: {
    type: String,
    enum: ['Incomplete', 'Completed', 'Sent'],
    default: "Incomplete",
  },
  occasion: {
    type: String,
    enum: ['Anniversary', 'Birthday', 'Graduation', 'Promotion', 'Wedding']
  },
  title: {
    type: String
  }, 
  theme: {
    type: String,
  },
},
{ timestamps: true })

const GreetingCard = mongoose.model('GreetingCard', greetingCardSchema)
module.exports = GreetingCard
