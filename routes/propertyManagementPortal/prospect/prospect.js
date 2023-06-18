const Notification = require("../../../models/Notification/Notification");
const Prospects = require("../../../models/PropertyManagementPortal/Prospect/Prospect");
const { sendProspectEmail } = require("../../../utils/email/prospectEmail");
const {
  emitRealTimeNotifications,
} = require("../../notification/emitRealTimeNotifications");

const router = require("express").Router();

//create a prospect

router.post("/", async (req, res, next) => {
  const newProspect = new Prospects(req.body);
  console.log(req.body);
  try {
    const savedProspect = await newProspect.save();
    // property manager getting prospects notification
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          Prospects: {
            applicantEmail: savedProspect.details.emailAddress,
            applicantName: savedProspect.details.fullName,
            applicantPhoneno: savedProspect.details.mobile,
          },
        },
      },
      { upsert: true }
    );

    // property manager getting prospects notification through email
    if (savedProspect) {
      sendProspectEmail(savedProspect);
    }
    emitRealTimeNotifications();
    res.status(200).json(savedProspect);
  } catch (err) {
    next(err);
  }
});

//get all prospects

router.get("/", async (req, res, next) => {
  try {
    const prospects = await Prospects.find({});

    res.status(200).json(prospects);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
