const router = require('express').Router();
const productImgController = require('../controller/imagesProductController')
const multer = require('multer')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/getImgProduct/:id', productImgController.getProductImg);
router.post('/uploadFile', upload.single('image'), productImgController.saveProductImg)
module.exports = router