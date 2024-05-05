const mongoose = require('mongoose')
const imgProductSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String
});

const ImagePicPoint = mongoose.model('ImagePoint', imgProductSchema);

module.exports = ImagePicPoint;
