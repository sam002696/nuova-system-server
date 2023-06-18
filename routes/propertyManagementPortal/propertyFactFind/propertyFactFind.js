const Notification = require("../../../models/Notification/Notification");
const PropertyFactFind = require("../../../models/PropertyManagementPortal/PropertyFactFind/PropertyFactFind");
const {
  sendPropertyFactFindEmail,
} = require("../../../utils/email/propertyFactFindEmail");
const { emitRealTimeNotifications } = require("../../notification/emitRealTimeNotifications");

const router = require("express").Router();

//create a property fact find form

router.post("/", async (req, res, next) => {
  const newPropertyFactFind = new PropertyFactFind(req.body);
  console.log(req.body);
  try {
    const savedPropertyFactFind = await newPropertyFactFind.save();
    // property manager getting property fact find notification
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          PropertyFactFind: {
            ownerEmail:
              savedPropertyFactFind.ownershipDetails.ownerOne.emailAddress,
            ownerName:
              savedPropertyFactFind.ownershipDetails.ownerOne.firstName,
            ownerPhoneno:
              savedPropertyFactFind.ownershipDetails.ownerOne.mobileTelephone,
          },
        },
      },
      { upsert: true }
    );
    // property manager getting property fact find through email
    if (savedPropertyFactFind) {
      sendPropertyFactFindEmail(savedPropertyFactFind);
    }
    emitRealTimeNotifications()
    res.status(200).json(savedPropertyFactFind);
  } catch (err) {
    next(err);
  }
});

//get all forms

// router.get("/", async (req, res, next) => {
//   try {
//     const allForms = await PropertyFactFind.find({});

//     res.status(200).json(allForms);
//   } catch (err) {
//     next(err);
//   }
// });

//find all forms based on lanlord's email

router.get("/", async (req, res, next) => {
  const email = req.query.email;
  console.log(email);
  if (email) {
    try {
      const landlordPropertyFactFind = await PropertyFactFind.find({
        "ownershipDetails.ownerOne.emailAddress": email,
      });

      res.status(200).json(landlordPropertyFactFind);
    } catch (err) {
      next(err);
    }
  } else {
    try {
      const allForms = await PropertyFactFind.find({});

      res.status(200).json(allForms);
    } catch (err) {
      next(err);
    }
  }
});
module.exports = router;
