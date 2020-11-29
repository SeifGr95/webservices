const answerController = require("../controllers/answer.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();



router.get("/",verifToken, answerController.getAll);
router.get("/ByQuestionId/:questionid",verifToken, answerController.getByQuestionId);
router.get("/:id", verifToken, answerController.getOne);
router.post("/", verifToken, answerController.create);
router.put("/:id", verifToken, answerController.update);
router.delete("/:id", verifToken, answerController.delete);

module.exports = router;
