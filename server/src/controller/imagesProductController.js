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
        const files = req.files.map(file => ({
            data: file.buffer,
            contentType: file.mimetype
        }));

        const savedFiles = await Promise.all(files.map(file => productImgService.saveProductImg(file)));

        const savedFileIds = savedFiles.map(savedFile => savedFile.data._id);
        res.status(200).json(savedFileIds)
    } catch (e) {
        next(e)
    }
}

module.exports = {
    getProductImg,
    saveProductImg
}