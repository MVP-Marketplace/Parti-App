const db = require('../models');


const create = (req, res) => {
  db.Card.create((req.body), function(err, card){
  if(err){
    console.log(err);
  return res.send({message: err}) 
      }
else{
  res.send({card: card}) 
      console.log(card) // res.redirect("/")
  }} 
)};

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