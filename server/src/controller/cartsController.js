const { ObjectId } = require("mongoose");

const CartInfo = require("../models/Cart");

const getCart = async (req, res, next) => {
  try {
    let cart = await CartInfo.findOne({ userId: req.user._id });
    if (!cart) {
      throw new Error("Dont have any products in the cart");
    }
    res.json(cart.productList);
  } catch (error) {
    next(error);
  }
};
const addProduct = async (req, res, next) => {
  try {
    const cart = await CartInfo.findOne({ userId: req.user._id });
    if (!cart) {
      const newCart = await CartInfo.create({
        userId: req.user._id,
        productList: [
          {
            productId: req.body.id,
            productName: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
            total: req.body.quantity * req.body.price,
          },
        ],
      });
      if (!newCart) throw new Error("can't add product to cart");

      res.status(201).json(newCart.productList);
    } else {
      const carts = await CartInfo.find();
      console.log(carts);
      const existingProduct = await CartInfo.aggregate([
        {
          $match: { userId: req.user._id },
        },
      ]).exec();
      if (existingProduct) {
        console.log(
          JSON.stringify({ body: req.body, existingProduct, user: req.user })
        );
        await CartInfo.findOneAndUpdate(
          {
            userId: req.user._id,
            "productList.productId": req.body.id,
          },
          {
            $set: {
              "productList.$.quantity": existingProduct.quantity + 1,
            },
          }
        );
        return res.status(200);
      }

      const newProduct = {
        productId: req.body.id,
        productName: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price, // Giá sản phẩm mới
        total: req.body.quantity * req.body.price, // Tính tổng giá trị sản phẩm mới
      };
      await CartInfo.updateOne(
        { userId: req.user._id },
        { $push: { productList: newProduct } }
      );

      const updatedCart = await CartInfo.findOne({ userId: req.user._id });
      if (!updatedCart) throw new Error("cant update cart");
      return res.status(201).json(updatedCart.productList);
    }
  } catch (err) {
    next(err);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    let cart = await CartInfo.findOne({ userId: req.user._id });
    if (!cart) {
      throw new Error("Don't have any items in cart");
    }
    const oldLegth = cart.productList.length;
    for (let i = 0; i < cart.productList.length; i++) {
      if (cart.productList[i].productName === req.body.name) {
        cart.productList.splice(i, 1);
        break;
      }
    }
    await cart.save();
    if (cart.productList.length === oldLegth)
      throw new Error("Your cart doesn't contain this product");
    else if (cart.productList.length === 0) {
      deleteCart = await CartInfo.deleteOne({ _id: cart._id });
      if (deleteCart) res.status(201).json([]);
    } else if (cart.productList.length === oldLegth - 1) {
      res.status(201).json(cart.productList);
    }
  } catch (err) {
    next(err);
  }
};
const deleteAllProduct = async (req, res, next) => {
  try {
    let cart = await CartInfo.findOne({ userId: req.user._id });
    if (!cart) {
      throw new Error("Don't have any items in cart");
    }
    const result = await CartInfo.deleteOne({ _id: cart._id });
    if (result.deletedCount == 1) res.status(201).json([]);
    else throw new Error("Can't deleted this cart");
  } catch (err) {
    next(err);
  }
};

const updateCart = async (req, res, next) => {
  try {
    let cart = await CartInfo.findOneAndUpdate(
      {
        userId: req.user._id,
        "productList.productName": req.body.name,
      },
      {
        $set: {
          "productList.$.quantity": req.body.quantity,
        },
      }
    );
    res.status(200).text("ok");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCart,
  addProduct,
  deleteProduct,
  deleteAllProduct,
  updateCart,
};
