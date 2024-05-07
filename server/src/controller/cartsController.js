// controller/cartsController.js

const {
  getCart,
  addProductToCart,
  deleteProductFromCart,
  deleteAllProductsFromCart,
  updateCartProduct,
} = require("../services/cart.services");

const getCartController = async (req, res, next) => {
  try {
    const productList = await getCart(req.user._id);
    res.json(productList);
  } catch (error) {
    next(error);
  }
};

const addProductController = async (req, res, next) => {
  try {
    const productList = await addProductToCart(req.user._id, {
      id: req.body.id,
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
    });
    res.status(201).json(productList);
  } catch (err) {
    next(err);
  }
};

const deleteProductController = async (req, res, next) => {
  try {
    const productList = await deleteProductFromCart(req.user._id, req.body.name);
    res.status(201).json(productList);
  } catch (err) {
    next(err);
  }
};

const deleteAllProductController = async (req, res, next) => {
  try {
    const productList = await deleteAllProductsFromCart(req.user._id);
    res.status(201).json(productList);
  } catch (err) {
    next(err);
  }
};

const updateCartController = async (req, res, next) => {
  try {
    const productList = await updateCartProduct(
      req.user._id,
      req.body.name,
      req.body.quantity
    );
    res.status(200).json(productList);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCartController,
  addProductController,
  deleteProductController,
  deleteAllProductController,
  updateCartController,
};
