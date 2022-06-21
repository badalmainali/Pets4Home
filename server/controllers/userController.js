const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sentToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const asyncHandler = require("express-async-handler");
const generateToken=require('../utils/generateToken')

// User Registration:

exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email: email });
  // Checking Whether user exists or not
  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  // If user is created
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      image:user.image,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

// User Login:
exports.userLogin =  asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      image:user.image,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Get user Profile
// @route Get /api/users/profile
// @acess Private
exports. getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
// @desc Update Profile
// @route PUt /api/users/profile
// @acess Private
exports. updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
   user.name=req.body.name ||user.name
   user.email=req.body.email||user.email
   if(req.body.password){
    user.password=req.body.password
   }

   const updatedUser=await user.save()
   res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
    token:generateToken(updatedUser._id)
   })
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
