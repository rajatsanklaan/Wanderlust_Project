const express = require("express");
const router = express.Router({mergeParams:true});
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isReviewAuthor } = require("../middlewares.js");
const reviewController = require("../Controllers/reviews.js");


// Delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,  reviewController.destroyReview);

// Post Request
router.post("/",isLoggedIn, reviewController.createReview);

module.exports = router;