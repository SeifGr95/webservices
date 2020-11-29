const eventController = require("../controllers/event.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();



router.get("/", eventController.getAll);
router.get("/:id", verifToken, eventController.getOne);
router.post("/", verifToken, eventController.create);
router.put("/:id", verifToken, eventController.update);
router.delete("/:id", verifToken, eventController.delete);
router.post("/favoris", eventController.favoris);
router.get("/favoris/:user_id" , eventController.getuserfavoris)
module.exports = router;
