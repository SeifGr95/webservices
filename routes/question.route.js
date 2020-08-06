const questionController = require("../controllers/questionController");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();



router.get("/",verifToken, questionController.getAll);
router.get("/filter/:t", verifToken, questionController.filterByType);
router.get("/:id", verifToken, questionController.getQuestion);
router.post("/", verifToken, questionController.createQuestion);
router.put("/:id", verifToken, questionController.updateQuestion);
router.delete("/:id", verifToken, questionController.deleteQuestion);

module.exports = router;
