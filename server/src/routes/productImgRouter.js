const router = require('express').Router();
const productImgController = require('../controller/imagesProductController')
const multer = require('multer')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const middleware = require('../middleware/authMiddleware')

router.post('/saveImgProduct', upload.array('image', 4), productImgController.saveProductImg);
router.get('/getImgProduct/:id', productImgController.getProductImg);

module.exports = router