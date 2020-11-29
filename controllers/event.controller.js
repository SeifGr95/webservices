const eventModel = require("../models/event.model.");
const FavorisModel = require("../models/Favoris.model");

exports.getAll = (req, res) => {
  eventModel
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

exports.favoris = (req , res ) => {
  

  // Create a Tutorial
  const favoris = new FavorisModel(req.body);

  // Save Tutorial in the database
  favoris
    .save()
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

exports.getuserfavoris= (req, res) => {
  FavorisModel.find({id_user : req.params.user_id})
  .then((data) => {
    res.send(data);
  })
}
exports.getOne = (req, res) => {
  const id = req.params.id;

  eventModel
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
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const event = new eventModel({
    title: req.body.title,
    type: req.body.type,
    lieu: req.body.lieu,
    date: req.body.date,
    description: req.body.description,
    contenu: req.body.contenu,


  });

  // Save Tutorial in the database
  event
    .save(event)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the event.",
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;
  eventModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false, new:true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          status:'failed',
          message: `Cannot update event with id=${id}. Maybe event was not found!`,
        });
      } else res.send({status:'success', message: "event was updated successfully.",record:data });
    })
    .catch((err) => {
      res.status(500).send({
        status:'failed',
        message: "Error updating event with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  eventModel.findByIdAndRemove(req.params.id).then(r=>{
    res.json({
        result: "deleted",
      });
  });

  
};
