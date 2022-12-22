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
  },
  { timestamps: true }
);

module.exports = mongoose.model("CertificateUpload", CertificateUploadSchema);
