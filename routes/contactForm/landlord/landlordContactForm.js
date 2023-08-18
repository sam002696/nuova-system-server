const LandlordContactForm = require("../../../models/ContactForm/Landlord/LandlordContactForm");
const {
  sendLandlordContactFormEmail,
} = require("../../../utils/email/contactFormEmail");

const router = require("express").Router();

router.post("/", async (req, res, next) => {
  const newLandlordContactForm = new LandlordContactForm(req.body);
  try {
    const savedLandlordContactForm = await newLandlordContactForm.save();

    res.status(200).json(savedLandlordContactForm);
    sendLandlordContactFormEmail(savedLandlordContactForm);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const landlordContactForm = await LandlordContactForm.find({});
    res.status(200).json(landlordContactForm);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
