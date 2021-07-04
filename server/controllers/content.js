const db = require('../models');
const GreetingCard = require("../models/GreetingCard");

const create = async (req, res) => {
  console.log("line 24 req.body Content model ", req.body);
	try {
		const cretedContent = await db.Card.create(req.body);
		GreetingCard.findById(req.body.cardId, (err, cretedContentard) => {
			cretedContentard.content.push(cretedContentard);
			cretedContentard.save();
      res.send({cretedContentard: cretedContentard})
      console.log(cretedContentard)
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
    create
  };