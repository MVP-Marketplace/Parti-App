require('dotenv').config({path:__dirname+'/./../../.env'});

const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey(process.env.SG_KEY)

console.log(process.env.SG_KEY)

const msg = {
  to: 'partiapp.cloudinary@gmail.com',
  from: 'partiapp.cloudinary@gmail.com',
  subject: 'Sendgrid test',
  text: 'Test'
}

sendGridMail
  .send(msg)
  .then((res) => {
    console.log(res[0].statusCode)
  })
  .catch((err) => console.log(err))