const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares.js");
const userController = require("../Controllers/users.js");

router.route("/signup")
.get(userController.renderSignupForm)
.post( userController.signup);

// router.get("/signup",userController.renderSignupForm);

// router.post("/signup", userController.signup);

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login" , failureFlash:true}) ,userController.login );

// router.get("/login",userController.renderLoginForm);

// router.post("/login",saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login" , failureFlash:true}) ,userController.login );

router.get("/logout", userController.logout )

module.exports = router;