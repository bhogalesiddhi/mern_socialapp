const express = require("express");
const { auth, login } = require("../controller/authController");
const router = express.Router();
const User = require("../models/userModel");

router.route("/register").post(auth);

router.route("/login").post(login);


module.exports=router;