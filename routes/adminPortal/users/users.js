const router = require("express").Router();
const User = require("../../../models/AdminPortal/CreateUser/User");
const bcrypt = require("bcrypt");
const { createError } = require("../../../utils/error");
const Property = require("../../../models/PropertyManagementPortal/AddProperty/Property");
const TenantUpload = require("../../../models/PropertyManagementPortal/PropertyReview/TenantUpload/TenantUpload");

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

// delete user
router.delete("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json("User not found");
    }

    // Check if the user has the role "tenant"
    if (user.role === "Tenant") {
      const properties = await Property.find({ tenantDetails: userId });

      for (const property of properties) {
        const tenantIndex = property.tenantDetails.indexOf(userId);
        if (tenantIndex !== -1) {
          property.tenantDetails.splice(tenantIndex, 1);
          await property.save();
        }
      }

      // delete from the tenant upload
      await TenantUpload.deleteMany({ _id: userId });
    }

    // Delete the user
    await User.findByIdAndDelete(userId);

    res.status(200).json("User has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

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
  const userEmail = req.query.email;
  const userrole = req.query.role;
  if (userEmail) {
    try {
      const user = await User.findOne({ email: userEmail });
      if (!user) {
        res.status(404).json("user not found! email address is incorrect.");
      }
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
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

// router.get("/", async (req, res, next) => {
//   try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
