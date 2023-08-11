const TenantContactForm = require("../../../models/ContactForm/Tenant/TenantContactForm");
const {
  sendTenantContactFormEmail,
} = require("../../../utils/email/contactFormEmail");

const router = require("express").Router();

router.post("/", async (req, res, next) => {
  const newTenantContactForm = new TenantContactForm(req.body);
  console.log(newTenantContactForm);
  try {
    const savedTenantContactForm = await newTenantContactForm.save();

    res.status(200).json(savedTenantContactForm);
  } catch (err) {
    next(err);
  }
  sendTenantContactFormEmail(newTenantContactForm);
});

module.exports = router;
