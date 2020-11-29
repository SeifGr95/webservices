const contactController = require("../controllers/contact.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();


router.post("/", contactController.create);


// product type

module.exports = router;