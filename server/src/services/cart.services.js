// services/cartService.js

const CartInfo = require("../models/Cart");
const User = require('../models/User');
const Product = require('../models/Product');

const findOrCreateCart = async (userId) => {
  let cart = await CartInfo.findOne({ userId });
  if (!cart) {
    cart = await CartInfo.create({
      userId,
      productList: [],
    });
  }
  return cart;
};

const getCart = async (userId) => {
  const cart = await findOrCreateCart(userId);
  return cart.productList;
};

const addProductToCart = async (userId, productDetails) => {
  const cart = await findOrCreateCart(userId);
  const existingProduct = cart.productList.find(
    (product) => product.productId === productDetails.id
  );

  if (existingProduct) {
    console.log(0);
    existingProduct.quantity += productDetails.quantity;
    existingProduct.total += productDetails.quantity * productDetails.price;
  } else {
    const newProduct = {
      productId: productDetails.id,
      productName: productDetails.name,
      quantity: productDetails.quantity,
      price: productDetails.price,
      total: productDetails.quantity * productDetails.price,
    };
    cart.productList.push(newProduct);
  }
  await cart.save();
  return cart.productList;
};

const deleteProductFromCart = async (userId, productName) => {
  const cart = await findOrCreateCart(userId);
  const originalLength = cart.productList.length;

  cart.productList = cart.productList.filter(
    (product) => product.productName !== productName
  );

  if (cart.productList.length === originalLength) {
    throw new Error("Your cart doesn't contain this product");
  }

  if (cart.productList.length === 0) {
    await CartInfo.deleteOne({ _id: cart._id });
    return [];
  }

  await cart.save();
  return cart.productList;
};

const deleteAllProductsFromCart = async (userId) => {
  const user = await CartInfo.findOne({ userId: userId });
  if (!user) throw new Error("Cart not found")
  user.productList.map(async item => {
    const product = await Product.findById(item.productId)
    console.log(product);
    product.quantitySale += item.quantity;
    await product.save()
  })
  const result = await CartInfo.deleteOne({ userId });
  if (result.deletedCount === 1) {
    return [];
  } else {
    throw new Error("Can't delete this cart");
  }
};

const updateCartProduct = async (userId, productName, quantity) => {
  const cart = await CartInfo.findOneAndUpdate(
    {
      userId,
      "productList.productName": productName,
    },
    {
      $set: {
        "productList.$.quantity": quantity,
      },
    },
    { new: true }
  );

  if (!cart) {
    throw new Error("Product not found in cart");
  }

  return cart.productList;
};

module.exports = {
  getCart,
  addProductToCart,
  deleteProductFromCart,
  deleteAllProductsFromCart,
  updateCartProduct,
};
