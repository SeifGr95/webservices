const articleModel = require("../models/Article.model");

exports.getAll = (req, res) => {
  articleModel
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

exports.getOne = (req, res) => {
  const id = req.params.id;

  articleModel
    .findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found article with id " + id });
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
  if (!req.body.contenu) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const article = new articleModel({
    title: req.body.title,
    type: req.body.type,
    description: req.body.description,
    contenu: req.body.contenu,
  });

  // Save Tutorial in the database
  article
    .save(article)
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
  articleModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update article with id=${id}. Maybe article was not found!`,
        });
      } else res.send({ message: "article was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating article with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  articleModel.findByIdAndRemove(req.params.id).then(r=>{
    res.json({
        result: "deleted",
      });
  });

  
};
