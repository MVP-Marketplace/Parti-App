const db = require('../models');
const User = require("../models/User");

const create = async (req, res) => {
  console.log("line 24 req.body", req.body);
	try {
		const createdCard = await db.Card.create(req.body);
		User.findById(req.body.userId, (err, createdCard) => {
			createdCard.cardsList.push(createdCard);
			createdCard.save();
      res.send({createdCard: createdCard})
      console.log(createdCard)
		});
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
  db.Card.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedCard) => {
      if (err) console.log(err)
      res.json(updatedCard)
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