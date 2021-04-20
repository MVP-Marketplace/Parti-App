const mongoose = require('mongoose');
const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
})
  .then(() => console.log('MongoDb connected'))
  .catch((err) => console.log(err))