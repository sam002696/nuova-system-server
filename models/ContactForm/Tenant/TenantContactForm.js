const mongoose = require("mongoose");

const TenantContactForm = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    subject: {
      type: String,
    },
    tenantEmail: {
      type: String,
    },
    tenantMessage: {
      type: String,
    },
    tenantPhoneNo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TenantContactForm", TenantContactForm);
