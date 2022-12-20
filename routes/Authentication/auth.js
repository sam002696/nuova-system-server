const router = require("express").Router();
const User = require("../../models/AdminPortal/CreateUser/User");
const bcrypt = require("bcrypt");
const createError = require("../../utils/error");

//register
router.post("/register", async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hashedPass,
    });

    // const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

//login

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const validated = await bcrypt.compare(req.body.password, user.password);

      if (!validated) {
        next(createError(400, "wrong credentials!"));
      } else {
        res.status(200).json(user);
      }
    } else {
      next(createError(400, "wrong email address!"));
    }

    // res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
