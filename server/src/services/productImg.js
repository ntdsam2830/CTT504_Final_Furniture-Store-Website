const ProductImg = require('../models/ProductImage')

const saveProductImg = (files) => {
    return new Promise(async (resolve, reject) => {
        try {
            const saveImg = await ProductImg.create(files);
            if (!saveImg) {
                reject({
                    status: 'ERR',
                    message: 'Error in save image'
                })
            }
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: upImg
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getProductImg = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const check = await ProductImg.findById(id);
            if (!check) {
                reject({
                    status: 'ERR',
                    message: 'The ImgPoint not found'
                })
            } else {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: check
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    saveProductImg,
    getProductImg
}