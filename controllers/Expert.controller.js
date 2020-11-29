const Expert = require("../models/Expert.model");
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAll = async (req, res) => {
    let newList = await Expert.find().populate('Specialite');
    res.json(newList);
};

const getById = async (req, res) => {
    const userId = req.params.id;
    let user = await Expert.findById(userId).populate('Specialite'); 
    res.json(user);
};

const add = async (req, res) => {
    const name = req.body.name;
    const firstname = req.body.firstname;
    const email = req.body.email;
    const pass = req.body.password;
    const tel_exp = req.body.tel_exp;
    const ville_exp = req.body.ville_exp;
    const verification = req.body.verification;
    const Specialite = req.body.Specialite ;
    const type = "expert";

    const cryptPs = await bcrypt.hash(pass, 10);
    let user = await User.findOne({ email: email });
    if (user) {
        res.json({
            message: "Adresse email déja existante",
        });
    } else {
        const newUSer = new User({
            name: name,
            firstname: firstname,
            email: email,
            password: cryptPs,
            type: type, 
        });
        let result = await newUSer.save();
        const newExpert = new Expert({
            name: name,
            firstname: firstname,
            email: email,
            password: cryptPs,
            tel_exp: tel_exp,
            Specialite : Specialite , 
            ville_exp: ville_exp,
            verification: verification,
        });
        let result1 = await newExpert.save();
        res.json( result1);
    }
};



const update = async (req, res) => {
    const id = req.params.userid;

    const name = req.body.name; 
    const firstname = req.body.firstname; 
    const email = req.body.email; 
    const tel_exp = req.body.tel_exp; 
    const ville_exp = req.body.ville_exp; 
    const Specialite = req.body.Specialite ; 
    const verification = req.body.verification; 
    let result = await Expert.findByIdAndUpdate(id, {
            name: name,
            firstname: firstname,
            email: email,
            tel_exp: tel_exp,
            ville_exp: ville_exp,
            Specialite : Specialite , 
            verification: verification,
    });
    res.json(result);
};

const remove = async (req, res) => {
    const id = req.params.userid;
    let result = await Expert.findByIdAndRemove(id);

    res.json(result);
};




module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.update = update;
module.exports.remove = remove;
module.exports.add = add;