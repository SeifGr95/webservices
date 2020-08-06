const UserController = require("../controllers/users.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();

router.get("/", verifToken, UserController.getAllUsers);
router.get("/:id", verifToken, UserController.getUserById);
router.put("/:userid", verifToken, UserController.upDateNewUser);
router.delete("/:userid", verifToken, UserController.deleteUser);
router.post("/", UserController.addNewUser);
router.post("/login", UserController.loginUser);
module.exports = router;
