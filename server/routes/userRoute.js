const express = require("express");
const {
  registerUser,
  userLogin,
  getUserProfile,
  updateUserProfile
  
} = require("../controllers/userController");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../authentication/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(userLogin);
router.route("/profile").get(isAuthenticatedUser, getUserProfile).put(isAuthenticatedUser,updateUserProfile)
module.exports = router;
