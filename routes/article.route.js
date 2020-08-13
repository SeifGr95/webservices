const articleController = require("../controllers/article.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();



router.get("/",verifToken, articleController.getAll);
router.get("/:id", verifToken, articleController.getOne);
router.post("/", verifToken, articleController.create);
router.put("/:id", verifToken, articleController.update);
router.delete("/:id", verifToken, articleController.delete);

module.exports = router;
