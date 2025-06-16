const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner} = require("../middlewares.js");
const listingcontroller = require("../Controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.get("/new",isLoggedIn,listingcontroller.renderNewForm);

router.route("/")
.get(listingcontroller.index)
.post(isLoggedIn,upload.single('listing[image]'),listingcontroller.createListing);


router.route("/:id")
.get(listingcontroller.showListing)
.put(isLoggedIn,upload.single('listing[image]'),isOwner ,listingcontroller.updateListing)
.delete(isLoggedIn,isOwner,listingcontroller.deleteListing);
// Index route
// router.get("/",listingcontroller.index);

// New Route


// Show review Route
// router.get("/:id", listingcontroller.showListing);



// Create route
// router.post("/",isLoggedIn,listingcontroller.createListing);



// Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,listingcontroller.renderEditForm);

// Update Route
// router.put("/:id",isLoggedIn,isOwner, listingcontroller.updateListing);

// Delete Route
// router.delete("/:id",isLoggedIn,isOwner,listingcontroller.deleteListing);

module.exports = router;