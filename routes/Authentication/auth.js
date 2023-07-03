const router = require("express").Router();
const User = require("../../models/AdminPortal/CreateUser/User");
const Notification = require("../../models/Notification/Notification");
const {
  emitRealTimeNotifications,
} = require("../notification/emitRealTimeNotifications");

//register
router.post("/register", async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    console.log(newUser);
    const user = await newUser.save();
    // property manager getting user registration notification
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          GetPeople: {
            username: user.username,
            email: user.email,
            role: user.role,
          },
        },
      },
      { upsert: true }
    );
    emitRealTimeNotifications();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

//login

router.post("/login", async (req, res) => {
  console.log(req.body);
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
