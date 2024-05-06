const router = require("express").Router();
const otpController = require('../Controllers/otp.controllers')

router.post('/sendOtp', otpController.saveOtp);
router.post('/checkOtp', otpController.checkOtp);

module.exports = router;