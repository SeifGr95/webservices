const commisariatController = require ("../controllers/commisariat.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();

router.get("/", verifToken, commisariatController.getAll);
router.get("/:id", verifToken, commisariatController.getById);
router.put("/:userid", verifToken, commisariatController.update);
router.delete("/:userid", verifToken, commisariatController.remove);
router.post("/", verifToken,commisariatController.add);
module.exports = router;

