// routes/cartRouter.js

const router = require("express").Router();
const {
  getCartController,
  addProductController,
  deleteProductController,
  deleteAllProductController,
  updateCartController,
} = require("../controller/cartsController");

const { authGuard } = require("../middleware/authMiddleware");

router.get("/info", authGuard, getCartController);
router.post("/addToCart", authGuard, addProductController);
router.put("/updateCart", authGuard, updateCartController);
router.delete("/deleteProduct", authGuard, deleteProductController);
router.delete("/deleteAll", authGuard, deleteAllProductController);

module.exports = router;
