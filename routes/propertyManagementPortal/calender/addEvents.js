const router = require("express").Router();
const Notification = require("../../../models/Notification/Notification");
const Calender = require("../../../models/PropertyManagementPortal/Calender/AddEvents");

//post a single calender event

router.post("/", async (req, res, next) => {
  const newEvents = new Calender(req.body);
  try {
    const savedNewEvents = await newEvents.save();
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          Calender: {
            eventName: savedNewEvents.eventName,
            eventDetails: savedNewEvents.eventDetails,
          },
        },
      },
      { upsert: true }
    );
    res.status(200).json(savedNewEvents);
  } catch (err) {
    next(err);
  }
});

// get all calender events

router.get("/", async (req, res, next) => {
  try {
    const allEvents = await Calender.find({});
    res.status(200).json(allEvents);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
