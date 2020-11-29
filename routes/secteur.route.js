const secteurController = require("../controllers/secteur.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();



router.get("/",verifToken, secteurController.getAll);
router.get("/:id", verifToken, secteurController.getOne);
router.post("/", verifToken, secteurController.create);
router.put("/:id", verifToken, secteurController.update);
router.delete("/:id", verifToken, secteurController.delete);
router.post("/savespecilaite", verifToken, secteurController.createSpec);
router.get("/getbyname/:title",verifToken, secteurController.getOneByName);
module.exports = router;
