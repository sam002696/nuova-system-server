const mongoose = require("mongoose");

const TenantUploadSchema = new mongoose.Schema(
  {
    tenantPersonalInfo: {
      fullName: {
        type: String,
      },
      email: {
        type: String,
      },
      phoneNo: {
        type: String,
      },
      totalOccupants: {
        type: Number,
      },
      pets: {
        type: String,
      },
      petDesc: {
        type: String,
      },
      smokes: {
        type: String,
      },
      lawsuit: {
        type: String,
      },
      felony: {
        type: String,
      },
      lawsuitDesc: {
        type: String,
      },
      currentIncome: {
        type: String,
      },
      incomeAssistance: {
        type: String,
      },
      creditScore: {
        type: String,
      },
    },

    tenantResidency: {
      address: {
        type: String,
      },
      unitNumber: {
        type: Number,
      },
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      depositAmount: {
        type: Number,
      },
      state: {
        type: String,
      },
      zipCode: {
        type: String,
      },
      monthlyRent: {
        type: Number,
      },
      leaseStartDate: {
        type: String,
      },
      leaseEndDate: {
        type: String,
      },
      postCode: {
        type: String,
      },
      propertyName: {
        type: String,
      },
      tenancyDueDate: {
        type: String,
      },
      unitNumber: {
        type: String,
      },
    },

    guarantorInfo: {
      currentIncome: {
        type: String,
      },
      email: {
        type: String,
      },
      fullName: {
        type: String,
      },
      phoneNo: {
        type: String,
      },
    },

    status: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TenantUpload", TenantUploadSchema);
