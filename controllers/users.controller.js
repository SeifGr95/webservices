const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAllUsers = async (req, res) => {
  let newList = await UserModel.find();
  res.json({
    users: newList,
  });
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  let user = await UserModel.findById(userId);
  res.json({
    user: user,
  });
};

const addNewUser = async (req, res) => {
  const name = req.body.name;
  const firstname = req.body.firstname;
  const email = req.body.email;
  const pass = req.body.password;

  const cryptPs = await bcrypt.hash(pass, 10);
  let user = await UserModel.findOne({"email":email}); 
  if(user)
  {
    res.json({
        "message": "Adresse email déja existante",
      });
  }else
  {
    const newUSer = new UserModel({
        name: name,
        firstname: firstname,
        email: email,
        password: cryptPs,
      });
      let result = await newUSer.save();
      res.json({
        result: result,
      });
  }

};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const psw = req.body.password;
  const user = await UserModel.findOne({
    email: email,
  });
  if (user) {
    let comapred = await bcrypt.compare(psw, user.password);
    if (comapred) {
      let token = jwt.sign({ id: user._id }, "testTOken", {
        expiresIn: 86400, // expires in 24 hours
      });
      res.json({
        token: token,
        id: user._id,
      });
    } else {
      res.json({ message: "adresse ou mot de passe invalide " });
    }
  } else {
    res.json({ message: "adresse ou mot de passe invalide " });
  }
};

const upDateNewUser = async (req, res) => {
  //userid en parametre de la requete
  const id = req.params.userid;
  const name = req.body.name; // de corps de la requete
  let result = await UserModel.findByIdAndUpdate(id, {
    firstname: name,
  });
  res.json({
    result: result,
  });
};

const deleteUser = async (req, res) => {
  const id = req.params.userid;
  let result = await UserModel.findByIdAndRemove(id);

  res.json({
    result: result,
  });
};

module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.upDateNewUser = upDateNewUser;
module.exports.deleteUser = deleteUser;
module.exports.addNewUser = addNewUser;
module.exports.loginUser = loginUser;
