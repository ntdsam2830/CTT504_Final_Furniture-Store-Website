const router = require("express").Router();
const otpController = require('../controller/optController')

router.post('/sendOtp', otpController.saveOtp);
router.post('/checkOtp', otpController.checkOtp);

module.exports = router;