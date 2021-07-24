const db = require('../models');
const GreetingCard = require("../models/GreetingCard");
const Content = require("../models/Content");


const create = async (req, res) => {
	console.log("line 24 req.body", req.body);
	  try {
		  const createdCard = new Content(req.body);
      createdCard.save();
      GreetingCard.findByIdAndUpdate(req.body.greetingCardId, { $addToSet: { contentList: createdCard} }).exec();
      res.send({createdCard: createdCard})
	  } catch (err) {
		  console.log(err);
	  }
  }; 

const view = (req, res) => {
	Content.findById(req.params.id, (err, foundCard) => {
    console.log(foundCard)
	  if (err) console.log(err)
	  res.json(foundCard)
	});
  };

module.exports = {
    create,
	view,
  };
