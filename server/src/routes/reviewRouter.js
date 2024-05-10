const reviewController = require('../controller/reviewController')
const router = require("express").Router();
const middleware = require('../middleware/authMiddleware')

router.post('/addReview', middleware.authGuard, reviewController.addReview);
router.get('/getReview/:id', middleware.authGuard, reviewController.getReview);
router.put('/updateListFavor', middleware.authGuard, reviewController.updateFavorites);


module.exports = router;