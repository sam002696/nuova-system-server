const Notification = require("../../models/Notification/Notification");

const router = require("express").Router();

//get all Notifications

router.get("/", async (req, res, next) => {
  try {
    const manageNotifications = await Notification.findOne({});
    io.emit("notifications", manageNotifications);
    res.status(200).json(manageNotifications);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
