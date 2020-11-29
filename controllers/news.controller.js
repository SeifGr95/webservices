const News = require("../models/News.model");

exports.getAll = (req, res) => {
    News
        .find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving news.",
            });
        });
};
exports.getRecent = (req, res) => {
    var condition = {};
    if (req.params.l && req.params.l != "") {
        condition.limit = parseInt(req.params.l);
    }
    News.find({},null,condition).sort('-created_at').exec(function (err, data) {
        if (!err) {
            res.send(data);
          } else {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving recent questions.",
            });
          }
    });
};

exports.getOne = (req, res) => {
    const id = req.params.id;

    News.findById(id).then((data) => {
        if (!data)
            res.status(404).send({ message: "Not found news with id " + id });
        else res.send(data);
    })
        .catch((err) => {
            res.status(500).send({ message: "Error retrieving news with id=" + id });
        });
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Title can not be empty!" });
        return;
    } else if (!req.body.description) {
        res.status(400).send({ message: "Description can not be empty!" });
        return;
    } else if (!req.body.contenu) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const n = new News({
        title: req.body.title,
        description: req.body.description,
        contenu: req.body.contenu,
        image:req.body.image
    });

    n.save(n).then((data) => {
        res.send(data);
    })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the news.",
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;
    News
        .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update news with id=${id}. Maybe news was not found!`,
                });
            } else res.send({ message: "news was updated successfully." });
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating news with id=" + id,
            });
        });
};

exports.delete = (req, res) => {
    News.findByIdAndRemove(req.params.id).then(r => {
        res.json({
            result: "deleted",
        });
    });


};
