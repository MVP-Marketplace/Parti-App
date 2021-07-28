const db = require('../models');
const User = require("../models/User");
const GreetingCard = require("../models/GreetingCard");

const create = async (req, res) => {
	console.log("line 24 req.body", req.body);
	  try {
		  const createdCard = new GreetingCard(req.body);
      createdCard.save();
      User.findByIdAndUpdate(req.body.userId, { $addToSet: { cardsList: createdCard._id } }).exec();
      res.send({createdCard: createdCard})
	  } catch (err) {
		  console.log(err);
	  }
  };

const destroy = (req, res) => {
  GreetingCard.findByIdAndDelete(req.params.id, (err, deletedCard) => {
    if (err) console.log(err);
    res.json(deletedCard)
  });
};

const update = (req, res) => {
  GreetingCard.findOneAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedCard) => {
      if (err) console.log(err)
      res.send({updatedCard: updatedCard} )
  });
};

const view = (req, res) => {
	GreetingCard.findById(req.params.id, (err, foundCard) => {
    console.log(foundCard)
	  if (err) console.log(err)
	  res.json(foundCard)
	});
  };

module.exports = {
  create,
  destroy,
  update,
  view
};