const router = require("express").Router();
const tenantUpload = require("../../../../models/PropertyManagementPortal/PropertyReview/TenantUpload/TenantUpload");
const property = require("../../../../models/PropertyManagementPortal/AddProperty/Property");
const createError = require("../../../../utils/error");
const Notification = require("../../../../models/Notification/Notification");

//CREATE
router.post("/upload/:propertyid", async (req, res, next) => {
  const propertyId = req.params.propertyid;
  const tenantUploads = new tenantUpload(req.body);

  try {
    const savedtenantUploads = await tenantUploads.save();
    try {
      const propertyInfo = await property.findByIdAndUpdate(propertyId, {
        $push: { tenantDetails: savedtenantUploads._id },
      });
      //landlord notification
      await Notification.findOneAndUpdate(
        {},
        {
          $push: {
            "TenantAdd.landlord": {
              tenantName: savedtenantUploads.tenantPersonalInfo.fullName,
              propertyName: propertyInfo.propertyAddress.propertyName,
            },
          },
        },
        { upsert: true }
      );
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedtenantUploads);
  } catch (err) {
    next(err);
  }
});

//update
router.put("/update/:tenantdetailsid", async (req, res, next) => {
  const tenantDetailId = req.params.tenantdetailsid;
  try {
    await tenantUpload.findByIdAndUpdate(tenantDetailId, {
      $set: req.body,
    });
    res.status(200).json("tenant details has been updated.");
  } catch (err) {
    next(err);
  }
});

// delete
router.delete("/:id/:propertyid", async (req, res, next) => {
  const propertyId = req.params.propertyid;
  try {
    await tenantUpload.findByIdAndDelete(req.params.id);
    try {
      await property.findByIdAndUpdate(propertyId, {
        $pull: { tenantDetails: req.params.id },
      });
    } catch (err) {
      res.status(403).json(err);
    }
    res.status(200).json("tenant details has been deleted.");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
