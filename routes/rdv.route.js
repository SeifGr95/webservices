const rdvController = require("../controllers/rdv.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();

router.get("/", verifToken, rdvController.getAll);
router.get("/:id", verifToken, rdvController.getById);
router.put("/:userid", verifToken, rdvController.update);
router.put("/updateEtat/:userid", verifToken, rdvController.updateEtat);

router.delete("/:userid", verifToken, rdvController.remove);
router.post("/", verifToken,rdvController.add);
module.exports = router;
