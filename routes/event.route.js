const eventController = require("../controllers/event.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();



router.get("/",verifToken, eventController.getAll);
router.get("/:id", verifToken, eventController.getOne);
router.post("/", verifToken, eventController.create);
router.put("/:id", verifToken, eventController.update);
router.delete("/:id", verifToken, eventController.delete);

module.exports = router;
