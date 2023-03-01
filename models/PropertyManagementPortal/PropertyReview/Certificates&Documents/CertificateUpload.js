const mongoose = require("mongoose");

const CertificateUploadSchema = new mongoose.Schema(
  {
    certificateName: {
      type: String,
    },
    certificateProviderName: {
      type: String,
    },
    certificateProviderEmail: {
      type: String,
    },
    certificateProviderPhone: {
      type: String,
    },
    uploadedCertificate: {
      type: String,
    },
    certificateAddedBy: {
      type: String,
    },
    certificateExpiryDate: {
      type: Date,
    },
    isExpired: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CertificateUpload", CertificateUploadSchema);
