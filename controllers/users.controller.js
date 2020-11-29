const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const getAllUsers = async (req, res) => {
  let newList = await UserModel.find().populate("favoris");
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
  const type = req.body.type;

  const cryptPs = await bcrypt.hash(pass, 10);
  let user = await UserModel.findOne({ email: email });
  if (user) {
    res.json({
      message: "Adresse email déja existante",
    });
  } else {
    const newUSer = new UserModel({
      name: name,
      firstname: firstname,
      email: email,
      password: cryptPs,
      type: type,
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
        favoris: user.favoris,
        user:user,
      });
    } else {
      res.status(403).json({ message: "adresse ou mot de passe invalide " });
    }
  } else {
    res.status(403).json({ message: "adresse ou mot de passe invalide " });
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


const upDateUseremail = async (req, res) => {
  //userid en parametre de la requete
  const id = req.params.userid;
  const email = req.body.email; // de corps de la requete
  let result = await UserModel.findByIdAndUpdate(id, {
    email: email,
  });
  res.json({
    result: result, 
  });
};


const upDateUserpwd = async (req, res) => {
  //userid en parametre de la requete
  const id = req.params.userid;
  const psw = req.body.psw; // de corps de la requete
  const newpwd = req.body.newpwd; // de corps de la requete
  let user = await UserModel.findById(id);
  if (user) {
    let comapred = await bcrypt.compare(psw, user.password);
    if (comapred) {
      const cryptPs = await bcrypt.hash(newpwd, 10);
      user.password = cryptPs 
      user.save()
      res.send({}) 
    } else {
      res.status(403).json({ message: " mot de passe invalide " });
    }
  }
};



const deleteUser = async (req, res) => {
  const id = req.params.userid;
  let result = await UserModel.findByIdAndRemove(id);

  res.json({
    result: result,
  });
};
const addEventToFavoris = async (req, res) => {
  let userId = req.params.id;
  let eventID = req.body.eventID;
  let user = await UserModel.findById(userId);
 let currentFavoris=[]; 
   currentFavoris = user.favoris;
  let result = currentFavoris.findIndex((elm) => elm == eventID);
  console.log(result); 
  if (result!=-1) {
    let newFavoris = currentFavoris;
    let result = await UserModel.findByIdAndUpdate(userId, {
      favoris: newFavoris,
    });
    res.json({
      result: result,
    });
  } else {
    console.log("Addd ..",eventID);
    let newFavoris = [...currentFavoris, eventID];

    let result = await UserModel.findByIdAndUpdate(userId, {
      favoris: newFavoris,
    });
    res.json({
      result: result,
    });
  }


};

const getUserFavoris = async (req, res) => {
  let user = await UserModel.findById(req.params.id);
  if(user.favoris)
  {
    res.json({
      favoris: user.favoris,
    });
  }else
  {
    res.json({
      favoris: [],
    });
  }
 
};
const getUserFavorisByNames = async (req, res) => {
  let user = await UserModel.findById(req.params.id).populate('favoris');
  console.log(user.favoris); 
  if(user.favoris)
  {
    res.json({
      favoris: user.favoris,
    });
  }else
  {
    res.json({
      favoris: [],
    });
  }
 
};
const initUserFavories = async (req,res)=>{
  
  await UserModel.findByIdAndUpdate(req.params.id,{
    favoris:[]
  }); 
  res.json({
    'msg':'succes'
  })
}

module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.upDateNewUser = upDateNewUser;
module.exports.upDateUseremail = upDateUseremail;
module.exports.upDateUserpwd = upDateUserpwd;
module.exports.deleteUser = deleteUser;
module.exports.addNewUser = addNewUser;
module.exports.loginUser = loginUser;
module.exports.addFavoris = addEventToFavoris;
module.exports.getFavories = getUserFavoris;
module.exports.initFavoris = initUserFavories ; 
module.exports.getAllFavs = getUserFavorisByNames ;  