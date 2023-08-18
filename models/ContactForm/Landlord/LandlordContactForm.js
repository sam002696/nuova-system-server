const mongoose = require("mongoose");

const LandlordContactForm = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    landlordEmail: {
      type: String,
    },
    landlordMessage: {
      type: String,
    },
    landlordPhoneNo: {
      type: String,
    },
    package: {
      type: String,
    },
    portfolioSize: {
      type: String,
    },
    postCode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LandlordContactForm", LandlordContactForm);
