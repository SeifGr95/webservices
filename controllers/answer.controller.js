const answerModel = require("../models/Answer.model");

exports.getAll = (req, res) => {
  answerModel
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.getByQuestionId = (req, res) => {
  answerModel
    .find({question : req.params.questionid})
    .populate('user')
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.getOne = (req, res) => {
  const id = req.params.id;

  answerModel
    .findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found question with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving question with id=" + id });
    });
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body.answer) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const answer = new answerModel({
    answer: req.body.answer,
    question: req.body.question,
    user: req.body.user,
  });

  // Save Tutorial in the database
  answer
    .save(answer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the question.",
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;
  answerModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update answer with id=${id}. Maybe answer was not found!`,
        });
      } else res.send({ message: "answer was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating answer with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  answerModel.findByIdAndRemove(req.params.id).then(r=>{
    res.json({
        result: "deleted",
      });
  });

  
};
