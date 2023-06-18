const Notification = require("../../../models/Notification/Notification");
const TenancyForm = require("../../../models/PropertyManagementPortal/TenancyForm/TenancyForm");
const {
  sendTenantFactFindEmail,
} = require("../../../utils/email/tenantFactFindEmail");
const { emitRealTimeNotifications } = require("../../notification/emitRealTimeNotifications");

const router = require("express").Router();

//create a TenancyForm

router.post("/", async (req, res, next) => {
  const newTenancyForm = new TenancyForm(req.body);
  console.log(req.body);
  try {
    const savedTenancyForm = await newTenancyForm.save();
    // property manager getting tenant fact find notification
    await Notification.findOneAndUpdate(
      {},
      {
        $push: {
          TenantFactFind: {
            tenantEmail: savedTenancyForm.tenantInfo.email,
            tenantName: savedTenancyForm.tenantInfo.fullName,
            tenantPhoneno: savedTenancyForm.tenantInfo.telephoneNo,
          },
        },
      },
      { upsert: true }
    );
    // property manager getting tenant fact find info through email
    if (savedTenancyForm) {
      sendTenantFactFindEmail(savedTenancyForm);
    }
    emitRealTimeNotifications()
    res.status(200).json(savedTenancyForm);
  } catch (err) {
    next(err);
  }
});

//get all tenancy forms

router.get("/", async (req, res, next) => {
  try {
    const tenancyForm = await TenancyForm.find({});

    res.status(200).json(tenancyForm);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
