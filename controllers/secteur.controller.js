const secteurModel = require("../models/Secteur.model");
const specialiteModel = require("../models/Specialite.model")
exports.getAll = (req, res) => {
  secteurModel.find().populate('Specialite')
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving secteurs.",
    });
  });
   
};
exports.getOne = (req, res) => {
  const id = req.params.id;

  secteurModel
    .findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found secteur with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving secteur with id=" + id });
    });
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const secteur = new secteurModel({
    title: req.body.title,
    Specialite : req.body.Specialite
 
    
    
  });

 

  // Save Tutorial in the database
  secteur
    .save(secteur)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the secteur.",
      });
    });
};
exports.update = (req, res) => {
  //userid en parametre de la requete
  const id = req.params.id;
  secteurModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update secteur with id=${id}. Maybe secteur was not found!`,
        });
      } else res.send({ message: "secteur was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating secteur with id=" + id,
      });
    });
};

exports.delete =  (req, res) => {
  secteurModel.findByIdAndRemove(req.params.id).then(r=>{
    res.json({
      result: "deleted",
    });
  });

  
};


// secteur specialiteModel


exports.createSpec = (req, res) => {


  // Create a Tutorial
  const specialite = new specialiteModel({
    title: req.body.title
    
  });

  // Save Tutorial in the database
  specialite.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the secteur.",
      });
    });
};


exports.getOneByName = (req, res) => {
   
  
    secteurModel
      .find({title : req.params.title}).populate('Specialite')
      .then((data) => {
        if (!data)
          res.status(404).send({ message: "Not found secteur with id "  });
        else res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving secteur with id=" });
      });
  };