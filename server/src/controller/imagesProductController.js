const productImgService = require('../services/productImg')

const getProductImg = async (req, res, next) => {
    try {
        const imageId = req.params.id;
        if (!imageId) {
            throw new Error('The ImageId is required');
        }
        const img = await productImgService.getProductImg(imageId);
        res.contentType(img.data.contentType);
        res.send(img.data.data);
    } catch (e) {
        next(e);
    }
}

const saveProductImg = async (req, res, next) => {
    try {
        const file = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
        const savedFile = (await productImgService.saveProductImg(file)).data;
        res.status(200).json(savedFile.data._id)
    } catch (e) {
        next(e)
    }
}

module.exports = {
    getProductImg,
    saveProductImg
}