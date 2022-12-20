const Bidding = require("../../../models/ContractorPortal/ContractorBidding/Bidding");
const ContractorJob = require("../../../models/ContractorPortal/ContractorJob/ContractorJob");
const Report = require("../../../models/TenantPortal/MaintenanceReport/ReportModel");

const router = require("express").Router();

//post a bidding in report model Info using issue query

router.put("/:jobid", async (req, res, next) => {
  const newBidding = new Bidding(req.body);
  const jobid = req.params.jobid;
  try {
    const savedBidding = await newBidding.save();
    await Report.findByIdAndUpdate(jobid, {
      $push: { contracBiddingInfo: newBidding._id },
    });
    await ContractorJob.findByIdAndUpdate(
      jobid,
      {
        $set: { postBidding: true },
      },

      { new: true }
    );

    await ContractorJob.findByIdAndUpdate(
      jobid,
      {
        $push: { contractorBiddingEmail: newBidding.contractorEmail },
      },

      { new: true }
    );

    await ContractorJob.findByIdAndUpdate(jobid, {
      $push: { appliedJobs: newBidding._id },
    });
    res.status(200).json(savedBidding);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const biddingId = req.params.id;
  try {
    const singleBidding = await Bidding.findById(biddingId);
    res.status(200).json(singleBidding);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
