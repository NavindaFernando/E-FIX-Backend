const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/products", controller.getProducts);
router.post("/createproduct", controller.addProduct);
router.post("/updateproduct", controller.updateProduct);
router.post("/deleteproduct", controller.deleteProduct);

module.exports = router;