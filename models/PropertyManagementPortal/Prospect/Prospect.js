const mongoose = require("mongoose");

const ProspectsSchema = new mongoose.Schema(
  {
    propertyDetails: {
      availableDate: {
        type: Date,
      },
      value: {
        type: String,
      },
      addressline1: {
        type: String,
      },
      city: {
        type: String,
      },
      zipcode: {
        type: String,
      },
      beds: {
        type: Number,
      },
      baths: {
        type: Number,
      },
    },
    book: {
      preferredDay: {
        type: Date,
      },
      preferredTime: {
        type: String,
      },
    },
    details: {
      address: {
        type: String,
      },
      emailAddress: {
        type: String,
      },
      fullName: {
        type: String,
      },
      mobile: {
        type: String,
      },
      moveindate: {
        type: Date,
      },
    },
    extraInfo: {
      adults: {
        type: Number,
      },
      adverseCard: {
        type: String,
      },
      children: {
        type: Number,
      },
      currentOccupation: {
        type: String,
      },
      householdIncome: {
        type: Number,
      },
      jobTitle: {
        type: String,
      },
      lengthOfStay: {
        type: String,
      },
      livingArrangement: {
        type: String,
      },
      pets: {
        type: String,
      },
      reasonForMoving: {
        type: String,
      },
      relevantInfo: {
        type: String,
      },
      smoker: {
        type: String,
      },
      ukBasedGurantor: {
        type: String,
      },
    },
    preferences: {
      maxBeds: {
        type: Number,
      },
      maxRent: {
        type: Number,
      },
      parking: {
        type: String,
      },
      preference: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prospect", ProspectsSchema);
