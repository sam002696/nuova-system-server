const mongoose = require("mongoose");

const TenancyFormSchema = new mongoose.Schema(
  {
    propertyApplyingFor: {
      addressOfProperty: {
        type: String,
      },
      desiredEntryDate: {
        type: Date,
      },
      rent: {
        type: Number,
      },
      deposit: {
        type: Number,
      },
    },
    tenantInfo: {
      title: {
        type: String,
      },
      fullName: {
        type: String,
      },
      dob: {
        type: Date,
      },
      nationality: {
        type: String,
      },
      passportNo: {
        type: String,
      },
      telephoneNo: {
        type: String,
      },
      email: {
        type: String,
      },
      currentAddress: {
        type: String,
      },
      numberOfChildren: {
        type: Number,
      },
      smoker: {
        type: String,
      },
      pets: {
        type: String,
      },
      photographicId: {
        type: String,
      },
    },
    workDetailsChange: {
      occupation: {
        type: String,
      },
      lengthOfTime: {
        type: String,
      },
      annualIncome: {
        type: String,
      },
      previousEmployer: {
        type: String,
      },
    },
    guarantorDetails: {
      guarantor: {
        type: String,
      },
      salaryChanging: {
        type: String,
      },
      proofEmploymentContract: {
        type: Object,
        default: {},
      },
      payslips: [
        {
          type: String,
          default: "",
        },
      ],
      bankStatements: [
        {
          type: String,
          default: "",
        },
      ],
      creditScore: {
        type: String,
      },
    },
    firstReferee: {
      firstRefereeName: {
        type: String,
      },
      firstRefereeWorkAddress: {
        type: String,
      },
      firstRefereeEmailAddress: {
        type: String,
      },
      firstRefereeRelationship: {
        type: String,
      },
    },
    secondReferee: {
      secondRefereeName: {
        type: String,
      },
      secondRefereeWorkAddress: {
        type: String,
      },
      secondRefereeEmailAddress: {
        type: String,
      },
      secondRefereeRelationship: {
        type: String,
      },
    },
    nextOfKinDetails: {
      nextOfKinName: {
        type: String,
      },
      nextOfKinRelationship: {
        type: String,
      },
      nextOfKinAddress: {
        type: String,
      },
      nextOfKinTelNo: {
        type: String,
      },
      nextOfKinEmailAddress: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TenancyForm", TenancyFormSchema);
