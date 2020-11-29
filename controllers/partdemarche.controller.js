const partdemarcheModel = require("../models/partdemarche");
const product = require("../models/Product.model");

exports.getAll = (req, res) => {
  partdemarcheModel
    .find()
    .populate('product')
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

  partdemarcheModel
    .findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found event with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving event with id=" + id });
    });
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body.prix) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const partdemarche = new partdemarcheModel({
    prix: req.body.prix,
    unite: req.body.unite,
    product: req.body.product

  });

  // Save Tutorial in the database
  partdemarcheModel.find({ product: partdemarche.product }).then(data => {
    if (data.length > 0) {
      req.params.id = data[0]._id;
      this.update(req, res);
    } else {
      partdemarche
        .save(partdemarche)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the event.",
          });
        });
    }
  })

};
exports.update = (req, res) => {
  const id = req.params.id;
  partdemarcheModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update partdemarche with id=${id}. Maybe partdemarche was not found!`,
        });
      } else res.send({ message: "partdemarche was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating event with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  partdemarcheModel.findByIdAndRemove(req.params.id).then(r => {
    res.json({
      result: "deleted",
    });
  });


};
