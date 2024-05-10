const reviewService = require('../services/review.services')

const addReview = async (req, res, next) => {
    try {
        const { productId, userId, content } = req.body;
        if (!productId || !userId || !content) {
            throw new Error("Input is required")
        }
        const newReview = await reviewService.addReview(req.body);
        if (newReview) {
            res.status(200).json(newReview);
        }
    } catch (error) {
        next(error)
    }
}

const getReview = async (req, res, next) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            throw new Error("Product ID is required")
        }
        const reviewList = await reviewService.getReview(productId);
        res.status(200).json(reviewList);
    } catch (error) {
        next(error);
    }
}

const updateFavorites = async (req, res, next) => {
    try {
        const { listUser, reviewId } = req.body;
        if (!listUser || !reviewId) {
            throw new Error("List user and review ID are required")
        }

        const updatedReview = await reviewService.updateFavorites(listUser, reviewId);
        res.status(200).json(updatedReview);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addReview, getReview, updateFavorites
}