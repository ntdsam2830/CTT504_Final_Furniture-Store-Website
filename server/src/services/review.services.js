const Review = require('../models/Review')
const User = require('../models/User')
const Product = require('../models/Product')

const addReview = async (data) => {
    const { productId, userId, content } = data;
    const product = await Product.findById(productId);
    if (!product) throw new Error("Product not found");
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    const newReview = await Review.create({
        productId: productId,
        userId: userId,
        content: content,
    });
    if (newReview) return newReview;
}

const getReview = async (productId) => {
    const product = await Product.findById(productId);
    if (!product) throw new Error("Product not found");
    const reviewList = await Review.find({ productId: productId }).exec();
    return reviewList || []
}

const updateFavorites = async (listUser, reviewId) => {
    const review = await Review.findById(reviewId);
    if (!review) throw new Error("Review not found");
    listUser.map(async (userId) => {
        const user = await User.findById(userId);
        if (!user) throw new Error("User" + userId + "not found");
    })
    review.listUserLike = listUser;
    await review.save();
    return review;
}

module.exports = { addReview, getReview, updateFavorites }