require('dotenv').config({path:__dirname+'/./../../.env'});
const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey(process.env.SG_KEY)

const inviteMsg = {
  to: cloud, // Add receipint email here
  from: 'partiapp.cloudinary@gmail.com',
  subject: 'Parti Invite',
  text: 'Invite text goes here.... Replace with invite template'
}

const reminderMsg = {
  to: cloud, // Add receipint email here
  from: 'partiapp.cloudinary@gmail.com',
  subject: 'Parti reminder',
  text: 'Reminder text goes here.... Replace with reminder template'
}