const Property = require("../../../../models/PropertyManagementPortal/AddProperty/Property");
const InspectionReport = require("../../../../models/PropertyManagementPortal/PropertyReview/InspectionReport/InspectionReport");

const router = require("express").Router();

//create

router.post("/upload/:propertyid", async (req, res, next) => {
  const propertyId = req.params.propertyid;
  const newInspectionReport = new InspectionReport(req.body);

  try {
    const savedInspectionReport = await newInspectionReport.save();
    try {
      await Property.findByIdAndUpdate(propertyId, {
        $set: { inspectionReport: savedInspectionReport._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedInspectionReport);
  } catch (err) {
    next(err);
  }
});

router.put("/:inspectionReportId", async (req, res, next) => {
  const inspectionReportId = req.params.inspectionReportId;
  console.log(inspectionReportId);
  try {
    const updatedInspectionReport = await InspectionReport.findByIdAndUpdate(
      inspectionReportId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedInspectionReport);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
