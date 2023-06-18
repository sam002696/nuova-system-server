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

router.put("/:mainid/:objectid", async (req, res, next) => {
  const { mainid } = req.params;
  const { objectid } = req.params;
  const { field } = req.query;

  console.log(req.body);

  console.log(mainid, objectid, field);
  try {
    let updateField = null;
    let message = "";

    switch (field) {
      case "MaintenanceInfo":
        updateField = "MaintenanceInfo";
        message = "Maintenance field updated";
        break;
      case "CalendarAdd":
        updateField = "Calender";
        message = "Calendar field updated";
        break;
      case "GetPeople":
        updateField = "GetPeople";
        message = "GetPeople isViewed field updated";
        break;
      // Add more cases for other fields if needed

      default:
        res.status(400).json("Invalid field specified");
        return;
    }

    const notification = await Notification.findByIdAndUpdate(
      mainid,
      { $set: { [`${updateField}.$[element].isViewed`]: true } },
      { arrayFilters: [{ "element._id": objectid }] }
    );

    if (notification) {
      res.status(200).json({ message });
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
