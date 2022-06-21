const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");
const Google = require("../models/googleModel");
const express = require("express");
const router = express.Router();

// Config:
dotenv.config({ path: "config/config.env" });

// Google Auth CLient
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

// Google Login
router.post("/api/google-login", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });

  const { name, email, picture } = ticket.getPayload();

  try {
    //   Checking whether t
    let user = await Google.findOne({ email: email });
    if (user) {
      res.status(201);
      res.json({ name, email, picture });
      console.log(user);
    }
    // Saving to Database
    else {
      Google.create({ name, email, picture });
      // req.session.userId = user.id;
      res.status(201);
      res.json({ name, email, picture });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
