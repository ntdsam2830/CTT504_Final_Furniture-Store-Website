const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductReview = new Schema({
    productId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    listUserLike: {
        type: Array,
        required: true
    }
}, { timestamps: true });

module.export = mongoose.model('ProductReview', ProductReview);