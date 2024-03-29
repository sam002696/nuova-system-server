const router = require("express").Router();
const tenantUpload = require("../../../../models/PropertyManagementPortal/PropertyReview/TenantUpload/TenantUpload");
const property = require("../../../../models/PropertyManagementPortal/AddProperty/Property");
const createError = require("../../../../utils/error");
const Notification = require("../../../../models/Notification/Notification");
const {
  sendTenantAddInfoToPropertyManager,
  sendTenantAddInfoToLandlord,
} = require("../../../../utils/email/tenantAddEmail");
const {
  emitRealTimeNotifications,
} = require("../../../notification/emitRealTimeNotifications");
const User = require("../../../../models/AdminPortal/CreateUser/User");
const TenantUpload = require("../../../../models/PropertyManagementPortal/PropertyReview/TenantUpload/TenantUpload");

//CREATE
router.post("/upload/:propertyid", async (req, res, next) => {
  const propertyId = req.params.propertyid;
  const { email } = req.body.tenantPersonalInfo;

  try {
    const userInfo = await User.findOne({
      email: email,
    });
    const tenantUploads = new TenantUpload({
      tenantPersonalInfo: req.body.tenantPersonalInfo,
      tenantResidency: req.body.tenantResidency,
      guarantorInfo: req.body.guarantorInfo,
      userid: userInfo._id,
      status: "Current Tenant",
    });
    const savedtenantUploads = await tenantUploads.save();
    try {
      const propertyInfo = await property.findByIdAndUpdate(propertyId, {
        $push: { tenantDetails: savedtenantUploads._id },
      });
      //landlord getting tenant add notification
      await Notification.findOneAndUpdate(
        {},
        {
          $push: {
            "TenantAdd.landlord": {
              landlordEmail: propertyInfo.landlordInfo.landlordEmail,
              tenantName: savedtenantUploads.tenantPersonalInfo.fullName,
              propertyName: propertyInfo.propertyAddress.propertyName,
            },
          },
        },
        { upsert: true }
      );
      //property manager getting tenant add notification
      await Notification.findOneAndUpdate(
        {},
        {
          $push: {
            "TenantAdd.propertyManager": {
              tenantName: savedtenantUploads.tenantPersonalInfo.fullName,
              propertyName: propertyInfo.propertyAddress.propertyName,
            },
          },
        },
        { upsert: true }
      );

      //Property manager getting tenant add through email
      if (savedtenantUploads) {
        sendTenantAddInfoToPropertyManager(savedtenantUploads);
      }
      // landlord getting tenant add through email
      if (savedtenantUploads && propertyInfo) {
        sendTenantAddInfoToLandlord(savedtenantUploads, propertyInfo);
      }
      emitRealTimeNotifications();
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedtenantUploads);
  } catch (err) {
    next(err);
  }
});

//change the tenant status being assigned to a property
router.put("/update/:tenantid", async (req, res, next) => {
  const updatedStatus = req.query.tenantStatus;
  const tenantDetailId = req.params.tenantid;
  try {
    await tenantUpload.findByIdAndUpdate(
      tenantDetailId,
      {
        $set: { status: updatedStatus },
      },
      { new: true }
    );
    res.status(200).json("tenant status has been updated.");
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
    res
      .status(200)
      .json(
        "tenant details has been deleted both from property and tenant upload schema"
      );
  } catch (err) {
    next(err);
  }
});

// update the tenant details

router.put("/tenantDetails/:tenantid", async (req, res, next) => {
  const tenantDetailId = req.params.tenantid;
  try {
    const updatedTenant = await tenantUpload.findByIdAndUpdate(
      tenantDetailId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTenant);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
