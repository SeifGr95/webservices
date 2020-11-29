const questionModel = require("../models/Question.model");
const answerModel = require("../models/Answer.model");

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
exports.getRecent = (req, res) => {
  var condition = {};
  if(req.params.l && req.params.l != ""){
    condition.limit = parseInt(req.params.l);
  }
  questionModel.find({},null,condition).sort('-posted_date').exec(function (err, questions) {
    if (!err) {
      res.send(questions);
    } else {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recent questions.",
      });
    }
  });

};
exports.filterByType = (req, res) => {
  var condition = {};
  if (req.params.t && req.params.t != "") {
    condition.type = req.params.t;
  }
  questionModel
    .find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving questions.",
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
  const question = new questionModel(req.body);

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

  // await answerModel.deleteMany({question : req.params.id})
  let result = await questionModel.findByIdAndRemove(req.params.id);

  res.json({
    result: result,
  });
};
