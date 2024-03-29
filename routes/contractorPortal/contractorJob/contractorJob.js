const ContractorJob = require("../../../models/ContractorPortal/ContractorJob/ContractorJob");
const Notification = require("../../../models/Notification/Notification");
const ReportModel = require("../../../models/TenantPortal/MaintenanceReport/ReportModel");
const {
  sendMaintenanceAcceptanceToTenantEmail,
  sendJobInfoToAllContractorEmail,
} = require("../../../utils/email/maintenaceEmail");
const {
  emitRealTimeNotifications,
} = require("../../notification/emitRealTimeNotifications");

const router = require("express").Router();

//post a job on the contractors hub

router.put("/:reportid", async (req, res, next) => {
  const date = new Date();
  const reportid = req.params.reportid;

  const newJobData = req.body;
  newJobData.createdAt = date;
  delete newJobData.updatedAt;

  const newJob = new ContractorJob(newJobData);
  try {
    const reportInfo = await ReportModel.findByIdAndUpdate(
      reportid,
      { $set: { post: true } },

      { new: true }
    );
    // maintenance request has been accepted by the property manager
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          "TenantMaintenance.TenantMaintenanceAcceptance": {
            tenantEmail: reportInfo.email,
            maintenanceTitle: reportInfo.issueName,
          },
        },
      },
      { upsert: true }
    );
    // tenant getting maintenance acceptance request through email
    if (reportInfo) {
      sendMaintenanceAcceptanceToTenantEmail(reportInfo);
      sendJobInfoToAllContractorEmail(reportInfo);
    }

    // Contractor Notified for Job Posting By Property Manager
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          ContractorJobPosting: {
            issueName: newJob.issueName,
            tenantAddress: newJob.tenantAddress,
            email: newJob.email,
          },
        },
      },
      { upsert: true }
    );

    // Task 2 start
    await ReportModel.findByIdAndUpdate(
      reportid,
      {
        $set: { "Timeline.taskTwo.createdAt": date },
      },
      {
        new: true,
      }
    );
    await ReportModel.findByIdAndUpdate(
      reportid,
      {
        $set: { "Timeline.taskTwo.postJob": true },
      },
      {
        new: true,
      }
    );
    // Task 2 end

    const savedJob = await newJob.save();

    emitRealTimeNotifications();

    res.status(200).json(savedJob);
  } catch (err) {
    next(err);
  }
});

//update single current job

router.put("/singlecontractorjob/:reportid", async (req, res, next) => {
  const reportid = req.params.reportid;

  try {
    const updatedContractorJob = await ContractorJob.findByIdAndUpdate(
      reportid,
      { $set: req.body },
      { new: true }
    );

    await ReportModel.findByIdAndUpdate(
      reportid,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedContractorJob);
  } catch (err) {
    next(err);
  }
});

//get all the jobs

router.get("/", async (req, res, next) => {
  try {
    const jobs = await ContractorJob.find({})
      .populate("appliedJobs")
      .populate("currentJobs")
      .populate("declinedJobs")
      .populate("completeJobs")
      .populate("incompleteJobs");
    res.status(200).json(jobs);
  } catch (err) {
    next(err);
  }
});

// get a single job

router.get("/:id", async (req, res, next) => {
  try {
    const jobs = await ContractorJob.findById(req.params.id);
    res.status(200).json(jobs);
  } catch (err) {
    next(err);
  }
});

// find a job using their single report id

router.get("/find/:reportid", async (req, res, next) => {
  try {
    await ContractorJob.findById(req.params.reportid);
    res.status(200).json("Found the job");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
