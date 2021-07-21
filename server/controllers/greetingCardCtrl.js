const db = require('../models');
const User = require("../models/User");
const GreetingCard = require("../models/GreetingCard");

const create = async (req, res) => {
	console.log("line 24 req.body", req.body);
	  try {
		  const createdCard = new GreetingCard(req.body);

		  const user = User.findOneAndUpdate(req.body.userId, (err, createdCard) => {
		  user.cardsList.push(createdCard._id);
		  user.save()
      createdCard.save();
		});
    // res.status(status).send(body)
    res.send({createdCard: createdCard})
              // {user :user})
	  } catch (err) {
		  console.log(err);
	  }
  };

const destroy = (req, res) => {
  db.Card.findByIdAndDelete(req.params.id, (err, deletedCard) => {
    if (err) console.log(err);
    res.json(deletedCard)
  });
};

const update = (req, res) => {
  db.Card.findOneAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedCard) => {
      if (err) console.log(err)
      res.send({updatedCard: updatedCard} )
  });
};

const view = (req, res) => {
  db.Card.findById(req.params.id, (err, foundCard) => {
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