const ExpertController = require("../controllers/Expert.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();

router.get("/", verifToken, ExpertController.getAll);
router.get("/:id", verifToken, ExpertController.getById);
router.put("/:userid", verifToken, ExpertController.update);
router.delete("/:userid", verifToken, ExpertController.remove);
router.post("/", verifToken,ExpertController.add);
module.exports = router;
