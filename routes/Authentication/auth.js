const router = require("express").Router();
const User = require("../../models/AdminPortal/CreateUser/User");
const bcrypt = require("bcrypt");
const createError = require("../../utils/error");
const Notification = require("../../models/Notification/Notification");

//register
router.post("/register", async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save();
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          GetPeople: {
            username: user.username,
            email: user.email,
          },
        },
      },
      { upsert: true }
    );
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
