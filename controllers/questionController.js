const questionModel = require("../models/Question.model");

exports.getAll = (req, res) => {
  questionModel
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
exports.filterByType = (req, res) => {
  console.log("staring by type...");
  var condition = {};
  if (req.params.t && req.params.t != "") {
    condition.type = req.params.t;
  }
  console.log(condition);
  questionModel
    .find(condition)
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
exports.getQuestion = (req, res) => {
  const id = req.params.id;

  questionModel
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

exports.createQuestion = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const question = new questionModel({
    title: req.body.title,
    description: req.body.description,
    type: req.body.type,
  });

  // Save Tutorial in the database
  question
    .save(question)
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
exports.updateQuestion = async (req, res) => {
  //userid en parametre de la requete
  const id = req.params.id;
  questionModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update question with id=${id}. Maybe question was not found!`,
        });
      } else res.send({ message: "question was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating question with id=" + id,
      });
    });
};

exports.deleteQuestion = async (req, res) => {
  const id = req.params.userid;
  let result = await questionModel.findByIdAndRemove(id);

  res.json({
    result: result,
  });
};
