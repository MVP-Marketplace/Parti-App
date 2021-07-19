const db = require('../models');
const GreetingCard = require("../models/GreetingCard");
const Content = require("../models/Content");

const create = async (req, res) => {
	console.log("line 24 req.body", req.body);
	  try {
		  const createdContent =  new Content(req.body);
		  console.log(createdContent)
		  createdContent.save()
 
		const card = await GreetingCard.findOneAndUpdate(req.body.greetingCardId, (err, createdContent) => {
			card.content.push(createdContent);
			card.save();
			console.log(updatedCard)
		});
		res.send(card)
	  } catch (err) {
		  console.log(err);
	  }
  };

module.exports = {
    create
  };