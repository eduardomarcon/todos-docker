const express = require("express");
const router = express.Router();
const Food = require("../models/todo");

router
  .route("/")
  .get((req, res) => {
    let query = req.query.q ? JSON.parse(req.query.q) : {};
    Food.find({ ...query }).then(foods => res.json(foods));
  })
  .post((req, res) => {
    Food.create({ ...req.body })
      .then(food => res.status(200).json(food))
      .catch(err => res.status(400).json(err));
  });

router
  .route("/:id")
  .get((req, res) => {
    Food.findById(req.params.id).then(food =>
      food ? res.json(food) : res.status(404).send()
    );
  })
  .put((req, res) => {
    Food.findByIdAndUpdate(
      req.params.id,
      { _id: req.params.id, ...req.body },
      { runValidators: true, new: true }
    )
      .then(food => res.json(food))
      .catch(err => res.status(400).json(err));
  })
  .delete((req, res) => {
    Food.findByIdAndRemove(req.params.id).then(() => res.status(200).send());
  });

module.exports = router;
