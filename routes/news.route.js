const newsController = require("../controllers/news.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();



router.get("/",verifToken, newsController.getAll);
router.get("/recent/:l",verifToken, newsController.getRecent);
router.get("/:id", verifToken, newsController.getOne);
router.post("/", verifToken, newsController.create);
router.put("/:id", verifToken, newsController.update);
router.delete("/:id", verifToken, newsController.delete);

module.exports = router;
