const commisariat = require("../models/commisariat.model");
const user = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAll = async (req, res) => {
    let newList = await commisariat.find()
    res.json(newList);
};

const getById = async (req, res) => {
    const userId = req.params.id;
    let commisariat = await commisariat.findById(userId);
    res.json(user);
};

const add = async (req, res) => {
    const name_com = req.body.name_com;
    const ville_com = req.body.ville_com;
    const adresse_com = req.body.adresse_com;
    const email_com = req.body.email_com;
    const tel_com = req.body.tel_com;
    const verification = req.body.verification;


    let Commisariat = new commisariat({
        name_com: name_com,
        email_com: email_com,
        tel_com: tel_com,
        ville_com: ville_com,
        adresse_com: adresse_com,
        verification: verification,
    });
    let result = await Commisariat.save();
    res.json(result);

};



const update = async (req, res) => {
    const id = req.params.userid;

    const name_com = req.body.name_com;
    const email_com = req.body.email_com;
    const tel_com = req.body.tel_com;
    const ville_com = req.body.ville_com;
    const adresse_com = req.body.adresse_com;
    const verification = req.body.verification;
    let result = await commisariat.findByIdAndUpdate(id, {
        name_com: name_com,
        email_com: email_com,
        tel_com: tel_com,
        ville_com: ville_com,
        adresse_com: adresse_com,
        verification: verification,
    });
    res.json(result);
};

const remove = async (req, res) => {
    const id = req.params.userid;
    let result = await commisariat.findByIdAndRemove(id);

    res.json(result);
};




module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.update = update;
module.exports.remove = remove;
module.exports.add = add;