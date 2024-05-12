const reviewController = require('../controller/reviewController')
const router = require("express").Router();
const middleware = require('../middleware/authMiddleware')

router.post('/addReview', middleware.authGuard, reviewController.addReview);
router.put('/updateListFavor', middleware.authGuard, reviewController.updateFavorites);
router.get('/getReview/:id', reviewController.getReview);

module.exports = router;