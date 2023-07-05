const Notification = require("../../models/Notification/Notification");
const { emitRealTimeNotifications } = require("./emitRealTimeNotifications");

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

router.put("/pm/:mainid/:objectid", async (req, res, next) => {
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
      case "PropertyFactFind":
        updateField = "PropertyFactFind";
        message = "PropertyFactFind field updated";
        break;
      case "TenantFactFind":
        updateField = "TenantFactFind";
        message = "TenantFactFind field updated";
        break;
      case "Prospects":
        updateField = "Prospects";
        message = "Prospects field updated";
        break;
      case "Calender":
        updateField = "Calender";
        message = "Calendar field updated";
        break;
      case "TaskReceivePm":
        updateField = "TaskReceivePm";
        message = "TaskReceivePm field updated";
        break;
      case "GetPeople":
        updateField = "GetPeople";
        message = "GetPeople field updated";
        break;
      case "CertificateAddPM":
        updateField = "CertificateAddPM";
        message = "CertificateAddPM field updated";
        break;
      case "TenantAddPM":
        updateField = "TenantAdd.propertyManager";
        message = "TenantAddPropertyManager field updated";
        break;
      case "InspectionReportPM":
        updateField = "ReportsDocuments.propertyManager.inspectionReport";
        message = "InspectionReportPM field updated";
        break;
      case "PropertyAddPM":
        updateField = "PropertyAdd.propertyManager";
        message = "PropertyAddPM field updated";
        break;
      case "JobBidderInfo":
        updateField = "JobBidderInfo";
        message = "JobBidderInfo field updated";
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
      emitRealTimeNotifications();
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/landlord/:mainid/:objectid", async (req, res, next) => {
  const { mainid } = req.params;
  const { objectid } = req.params;
  const { field } = req.query;

  console.log(req.body);

  console.log(mainid, objectid, field);
  try {
    let updateField = null;
    let message = "";

    switch (field) {
      case "TaskReceiveLandlord":
        updateField = "TaskReceiveLandlord";
        message = "TaskReceiveLandlord field updated";
        break;
      case "CertificateAddLandlord":
        updateField = "CertificateAddLandlord";
        message = "CertificateAddLandlord field updated";
        break;
      case "TenantAddLandlord":
        updateField = "TenantAdd.landlord";
        message = "TenantAddlandlord field updated";
        break;
      case "InspectionReportLandlord":
        updateField = "ReportsDocuments.landlord.inspectionReport";
        message = "InspectionReportLandlord field updated";
        break;
      case "InventoryLandlord":
        updateField = "ReportsDocuments.landlord.inventory";
        message = "InventoryLandlord field updated";
        break;
      case "PropertyAddLandlord":
        updateField = "PropertyAdd.landlord";
        message = "PropertyAddPLandlord field updated";
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
      emitRealTimeNotifications();
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/tenant/:mainid/:objectid", async (req, res, next) => {
  const { mainid } = req.params;
  const { objectid } = req.params;
  const { field } = req.query;

  console.log(req.body);

  console.log(mainid, objectid, field);
  try {
    let updateField = null;
    let message = "";

    switch (field) {
      case "TaskReceiveTenant":
        updateField = "TaskReceiveTenant";
        message = "TaskReceiveTenant field updated";
        break;
      case "TenantMaintenanceAcceptance":
        updateField = "TenantMaintenance.TenantMaintenanceAcceptance";
        message = "TenantMaintenanceAcceptance field updated";
        break;
      case "contractorAssignInfo":
        updateField = "TenantMaintenance.contractorAssignInfo";
        message = "contractorAssignInfo field updated";
        break;
      case "jobCompletion":
        updateField = "TenantMaintenance.jobCompletion";
        message = "jobCompletion field updated";
        break;
      case "jobIncomplete":
        updateField = "TenantMaintenance.jobIncomplete";
        message = "jobIncomplete field updated";
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
      emitRealTimeNotifications();
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/contractor/:mainid/:objectid", async (req, res, next) => {
  const { mainid } = req.params;
  const { objectid } = req.params;
  const { field } = req.query;

  console.log(req.body);

  console.log(mainid, objectid, field);
  try {
    let updateField = null;
    let message = "";

    switch (field) {
      case "ContractorJobPosting":
        updateField = "ContractorJobPosting";
        message = "ContractorJobPosting field updated";
        break;
      case "CompleteJobs":
        updateField = "Jobs.CompleteJobs";
        message = "CompleteJobs field updated";
        break;
      case "IncompleteJobs":
        updateField = "Jobs.IncompleteJobs";
        message = "contractorAssignInfo field updated";
        break;
      case "CurrentJobs":
        updateField = "Jobs.CurrentJobs";
        message = "jobCompletion field updated";
        break;
      case "DeclinedJobs":
        updateField = "Jobs.DeclinedJobs";
        message = "jobIncomplete field updated";
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
      emitRealTimeNotifications();
    } else {
      res.status(404).json({ message: "Notification not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
