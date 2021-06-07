const db = require("../models");

const create = (req, res) => {
  db.Content.create(req.body, (err, newContent) => {
    if (err) console.log(err);
    res.json(newContent);
  });
};

const view = (req, res) => {
  db.Content.findById(req.params.id, (err, foundContent) => {
    if (err) console.log(err);
    res.json(foundContent);
  });
};

module.exports = {
  create,
  view,
};
