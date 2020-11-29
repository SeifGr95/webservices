const UserController = require("../controllers/users.controller");
const notifController = require("../controllers/notification.controller");

const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();

router.get("/", verifToken, UserController.getAllUsers);
router.get("/:id", verifToken, UserController.getUserById);
router.put("/updateemail/:userid", verifToken, UserController.upDateUseremail);
router.put("/updatepwd/:userid", verifToken, UserController.upDateUserpwd);
router.put("/:userid", verifToken, UserController.upDateNewUser);
router.delete("/:userid", verifToken, UserController.deleteUser);
router.put("/addfavoris/:id",verifToken,UserController.addFavoris); 
router.get("/getfavoris/:id",verifToken,UserController.getFavories); 
router.get('/allfavs/:id',verifToken,UserController.getAllFavs); 
router.put('/initfavs/:id',UserController.initFavoris); 
router.post("/", UserController.addNewUser);
router.post("/login", UserController.loginUser);
router.get("/getnotif/:id",verifToken,notifController.getNotifByUserId); 
router.get("/getnotifAgri/:id",verifToken,notifController.getNotifByAgriId); 



module.exports = router;
