const partdemarcheController = require("../controllers/partdemarche.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();



router.get("/",verifToken, partdemarcheController.getAll);
router.get("/:id", verifToken, partdemarcheController.getOne);
router.post("/", verifToken, partdemarcheController.create);
router.put("/:id", verifToken, partdemarcheController.update);
router.delete("/:id", verifToken, partdemarcheController.delete);

module.exports = router;
