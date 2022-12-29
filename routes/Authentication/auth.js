const router = require("express").Router();
const User = require("../../models/AdminPortal/CreateUser/User");
const bcrypt = require("bcrypt");
const createError = require("../../utils/error");

//register
router.post("/register", async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (req.body.password !== user.password) {
        res.status(400).json("wrong credentials");
      } else {
        res.status(200).json(user);
      }
    } else {
      res.status(400).json("wrong email address");
    }

    // res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
