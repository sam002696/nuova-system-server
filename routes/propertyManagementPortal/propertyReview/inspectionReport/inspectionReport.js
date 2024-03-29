const Notification = require("../../../../models/Notification/Notification");
const Property = require("../../../../models/PropertyManagementPortal/AddProperty/Property");
const InspectionReport = require("../../../../models/PropertyManagementPortal/PropertyReview/InspectionReport/InspectionReport");
const {
  sendInspectionInfoToPropertyManagerEmail,
} = require("../../../../utils/email/reportsDocumentsEmail");
const { emitRealTimeNotifications } = require("../../../notification/emitRealTimeNotifications");

const router = require("express").Router();

//create

router.post("/upload/:propertyid", async (req, res, next) => {
  const propertyId = req.params.propertyid;
  const newInspectionReport = new InspectionReport(req.body);

  try {
    const savedInspectionReport = await newInspectionReport.save();
    try {
      const propertyInfo = await Property.findByIdAndUpdate(propertyId, {
        $set: { inspectionReport: savedInspectionReport._id },
      });
      // landlord getting inspection notification
      await Notification.findOneAndUpdate(
        {},
        {
          $push: {
            "ReportsDocuments.landlord.inspectionReport": {
              propertyName: propertyInfo.propertyAddress.propertyName,
              landlordEmail: propertyInfo.landlordInfo.landlordEmail,
            },
          },
        },
        { upsert: true }
      );
      // landlord getting inspection notification through email
      if (savedInspectionReport && propertyInfo) {
        sendInspectionInfoToLandlordEmail(savedInspectionReport, propertyInfo);
      }
      emitRealTimeNotifications()
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedInspectionReport);
  } catch (err) {
    next(err);
  }
});

router.put("/:inspectionReportId/:propertyId", async (req, res, next) => {
  const inspectionReportId = req.params.inspectionReportId;
  const propertyId = req.params.propertyId;
  console.log(inspectionReportId);
  try {
    const propertyInfo = await Property.findById(propertyId);
    const updatedInspectionReport = await InspectionReport.findByIdAndUpdate(
      inspectionReportId,
      {
        $set: req.body,
      },
      { new: true }
    );
    //property manager getting updated inspection notification
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          "ReportsDocuments.propertyManager.inspectionReport": {
            propertyName: propertyInfo.propertyAddress.propertyName,
            landlordName: propertyInfo.landlordInfo.landlordName,
          },
        },
      },
      { upsert: true }
    );
    //property manager getting updated inspection notification info through email
    if (propertyInfo && updatedInspectionReport) {
      sendInspectionInfoToPropertyManagerEmail(
        updatedInspectionReport,
        propertyInfo
      );
    }
    emitRealTimeNotifications()
    res.status(200).json(updatedInspectionReport);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
