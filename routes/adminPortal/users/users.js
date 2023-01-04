const router = require("express").Router();
const User = require("../../../models/AdminPortal/CreateUser/User");
const bcrypt = require("bcrypt");
const { createError } = require("../../../utils/error");

//update user
router.put("/:id", async (req, res, next) => {
  console.log(req.body.email, req.params.id);
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      if (!user.isModified("password")) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            {
              new: true,
            }
          );
          res.status(200).json(updatedUser);
        } catch (err) {
          next(err);
        }
      } else {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        try {
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            {
              new: true,
            }
          );
          res.status(200).json(updatedUser);
        } catch (err) {
          next(err);
        }
      }
    } catch (err) {
      next(err);
    }
  } else {
    next(createError(401, "You can update only your account!"));
  }
});

//delete user
// router.delete("/:id", async (req, res) => {
//   // if (req.body.userId === req.params.id) {
//   try {
//     const user = await User.findById(req.params.id);
//     try {
//       await Post.deleteMany({ username: user.username });
//       await User.findByIdAndDelete(req.params.id);
//       res.status(200).json("user has been deleted");
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } catch {
//     res.status(404).json("user not found");
//   }
// });

//get user
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    next(err);
  }
});

//get all users

router.get("/", async (req, res, next) => {
  const userrole = req.query.role;
  if (userrole) {
    try {
      const users = await User.find({ role: userrole });
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  } else {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
});

// get users based on their roles

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
