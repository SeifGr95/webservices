const productController = require("../controllers/product.controller");
const express = require("express");
const verifToken = require("../config/verifToken");
const router = express.Router();



router.get("/", productController.getAll);
router.get("/:id", verifToken, productController.getOne);
router.post("/", verifToken, productController.create);
router.put("/:id", verifToken, productController.update);
router.delete("/:id", verifToken, productController.delete);


// product type

router.post("/type" , productController.createType)
module.exports = router;
